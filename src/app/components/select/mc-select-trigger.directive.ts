import { fromEvent } from 'rxjs/observable/fromEvent';
import { filter } from 'rxjs/operators/filter';
import { take } from 'rxjs/operators/take';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {ESCAPE, ENTER} from '@angular/cdk/keycodes';
import {
  McSelectOverlayComponent
} from './jtmgio-select-overlay.component';
import {
  OverlayRef,
  Overlay,
  ConnectedPositionStrategy,
  PositionStrategy,
  RepositionScrollStrategy,
  ScrollStrategy
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  Directive,
  ViewContainerRef,
  Input,
  ElementRef,
  Optional,
  Host,
  Inject,
  ChangeDetectorRef,
  NgZone,
  forwardRef,
  InjectionToken,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {DOCUMENT} from '@angular/common';
import { delay } from 'rxjs/operators/delay';
import { tap } from 'rxjs/operators/tap';
import { defer } from 'rxjs/observable/defer';
import {of as observableOf} from 'rxjs/observable/of';
import {switchMap} from 'rxjs/operators/switchMap';
import { merge } from 'rxjs/observable/merge';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { MatOptionSelectionChange, MatFormField, MatOption } from '@angular/material';

export const jtmgio_SELECT_2_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => McSelectTriggerDirective),
  multi: true
};

/** Injection token that determines the scroll handling while the autocomplete panel is open. */
export const jtmgio_SELECT_2_SCROLL_STRATEGY =
    new InjectionToken<() => ScrollStrategy>('jtmgio-select-2-scroll-strategy');

/** @docs-private */
export function jtmgio_SELECT_2_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay: Overlay):
    () => RepositionScrollStrategy {
  return () => overlay.scrollStrategies.reposition();
}

/** @docs-private */
export const jtmgio_SELECT_2_SCROLL_STRATEGY_PROVIDER = {
  provide: jtmgio_SELECT_2_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: jtmgio_SELECT_2_SCROLL_STRATEGY_PROVIDER_FACTORY,
};

@Directive({
  selector: 'input[jtmgioSelectTrigger]',
  host : {
    '(focusin)' : '_handleFocus($event)',
    '(blur)' : '_onTouched()'
  },
  providers : [jtmgio_SELECT_2_VALUE_ACCESSOR]
})
export class McSelectTriggerDirective implements ControlValueAccessor, OnDestroy {

  @Input('jtmgioSelectTrigger') overlayComponent: McSelectOverlayComponent;

  private _overlayRef: OverlayRef | null;
  private _portal: TemplatePortal<any>;
  private _positionStrategy: ConnectedPositionStrategy;
  private _closingActionSubscription: Subscription;

  private _escapeEventStream: Subject<void> = new Subject<void>();
  private _panelOpen: boolean = false;

  /** View -> model callback called when value changes */
  private _onChange: (value: any) => void = () => { };
  private _onTouched = () => { };

   /** Stream of autocomplete option selections. */
  public optionSelections: Observable<MatOptionSelectionChange> = defer(() => {
    return merge(...this.overlayComponent.options.map(option => option.onSelectionChange));
  });
  
  constructor(
    @Optional() @Inject(DOCUMENT) private _document: any,
    @Inject(ElementRef) private _element,
    private _viewContainerRef: ViewContainerRef,
    private _overlay: Overlay,
    private _changeDetectorRef: ChangeDetectorRef,
    @Inject(jtmgio_SELECT_2_SCROLL_STRATEGY) private _scrollStrategy,
    private _zone: NgZone,
    @Optional() @Host() private _formField: MatFormField
  ) { }

  writeValue(obj: any): void {
    if (obj && obj instanceof Array) {
      this.overlayComponent.selectedOptions = obj.slice();
      
      if (this.overlayComponent.options) {
        this.overlayComponent.recheckOptions(this.overlayComponent.options.toArray());
      }  
    }
    Promise.resolve(null).then(() => this._setTriggerValue(obj));
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  openPanel(): void {
    this._attachOverlay();
  }

  closePanel(): void {
    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
      this._closingActionSubscription.unsubscribe();
    }

    if (this._panelOpen) {
      this.overlayComponent._isOpen = this._panelOpen = false;

      // We need to trigger change detection manually, because
      // `fromEvent` doesn't seem to do it at the proper time.
      // This ensures that the placeholder is reset when the
      // user clicks outside.
      this._changeDetectorRef.detectChanges();
    }
  }

  private _attachOverlay() {
    if (this.overlayComponent.disabled) {
      return;
    }
    if ( !this._overlayRef ) {
      this._portal = new TemplatePortal(this.overlayComponent.template, this._viewContainerRef);
      this._overlayRef = this._overlay.create({
        positionStrategy : this._getOverlayPosition(),
        scrollStrategy: this._scrollStrategy(),
        width: this.overlayComponent.multiple ? 300 : this._getHostWidth(),
        direction : 'ltr'
      });
    } else {
      this._overlayRef.updateSize({ width: this.overlayComponent.multiple ? 300 : this._getHostWidth() });
    }
    if (this._overlayRef && !this._overlayRef.hasAttached()) {
      this._overlayRef.attach(this._portal);
      this._closingActionSubscription = this._subscribeToClosingActions();
    }
    this.overlayComponent._isOpen = this._panelOpen = true;
    this.overlayComponent._setVisibility();
    this._changeDetectorRef.detectChanges();
    this.overlayComponent.focusInput();
  }


  private _getOverlayPosition(): PositionStrategy {

    this._positionStrategy = this._overlay.position().connectedTo(
      this._getConnectedElement(),
      { originX: 'start', originY: this.overlayComponent.multiple ? 'bottom' : 'top' }, { overlayX: 'start', overlayY: 'top' });
    return this._positionStrategy;
  }

  _handleFocus(event): void {
    event.currentTarget.blur();
    
    if (!this._element.nativeElement.readOnly) {
      this._attachOverlay();
    }
  }
  /* Whether or not the autocomplete panel is open. */
  get panelOpen(): boolean {
    return this._panelOpen && this.overlayComponent.showPanel;
  }


  /** Returns the width of the input element, so the panel width can match it. */
  private _getHostWidth(): number {
    return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
  }

  private _getHostHeight(): number {
    return this._getConnectedElement().nativeElement.getBoundingClientRect().height;
  }

  get panelClosingActions(): Observable<MatOptionSelectionChange> {
    return merge(
      this.optionSelections,
      this.overlayComponent._keyManager.tabOut,
      this._escapeEventStream,
      this._outsideClickStream
      );
  }
  /** Stream of clicks outside of the autocomplete panel. */
  private get _outsideClickStream(): Observable<any> {
    if (!this._document) {
      return observableOf(null);
    }
    return merge(
      fromEvent(this._document, 'click'),
      fromEvent(this._document, 'touchend')
    )
      .pipe(filter((event: MouseEvent | TouchEvent) => {
        const clickTarget = event.target as HTMLElement;
        const formField = this._formField ? this._formField._elementRef.nativeElement : null;
        
        return this._panelOpen &&
                clickTarget !== this._element.nativeElement &&
                (!formField || !formField.contains(clickTarget)) &&
                (!!this._overlayRef && !this._overlayRef.overlayElement.contains(clickTarget));
      }));
  }

  _subscribeToClosingActions() {
    const optionChanges = this.overlayComponent.options.changes.pipe(
      tap(() => this._positionStrategy.recalculateLastPosition()),
      // Defer emitting to the stream until the next tick, because changing
      // bindings in here will cause "changed after checked" errors.
      delay(0)
    );
    return optionChanges.pipe(
      switchMap(() => {
        this._resetActiveItem();
        this.overlayComponent._setVisibility();
        return this.panelClosingActions;
      })
    )
    .subscribe(event => this._setValueAndClose(event));
  }

  _setValueAndClose(event: MatOptionSelectionChange | null): void {

    if (event && event.source) {
      
      if (this.overlayComponent.multiple) { //Multiple
        this._updateSelectedOptions(event.source);
        this._onChange(this.overlayComponent.selectedOptions.slice());
        this._setTriggerValue(this.overlayComponent.selectedOptions);
        this.overlayComponent._emitSelectEvent(this.overlayComponent.selectedOptions);
        if (event.isUserInput) {
          this.overlayComponent.focusInput();
        }  
      } else { //Single
        this._setTriggerValue(event.source.value);
        this._onChange(event.source.value);
        this.overlayComponent._emitSelectEvent(event.source);
        this.closePanel();
      }
    }
    else { //Just close the panel in all other cases.
      this.closePanel();
    }
  }

  //For Multiple: Adds the clicked option to the array of selectedOptions on the overlay component.
  private _updateSelectedOptions(clickedOption) {
    let options = this.overlayComponent.selectedOptions;
    let index = options.indexOf(clickedOption.value);

    if (index > -1 && !clickedOption.selected) {
      options.splice(index, 1);
    }
    if (index === -1 && clickedOption.selected) {
      options.push(clickedOption.value);
    }
  }

  private _getConnectedElement(): ElementRef {
    return this._formField ? this._formField._connectionContainerRef : this._element;
  }

  private _setTriggerValue(value: any): void {
    const toDisplay = this.overlayComponent && this.overlayComponent.displayWith ?
      this.overlayComponent.displayWith(value) :
      value;


    // Simply falling back to an empty string if the display value is falsy does not work properly.
    // The display value can also be the number zero and shouldn't fall back to an empty string.
    const inputValue = toDisplay != null ? toDisplay : '';

    // If it's used within a `MatFormField`, we should set it through the property so it can go
    // through change detection.
    if (this._formField) {
      this._formField._control.value = inputValue;
    } else {
      this._element.nativeElement.value = inputValue;
    }
  }
    /** The currently active option, coerced to MatOption type. */
  get activeOption(): MatOption | null {
    if (this.overlayComponent && this.overlayComponent._keyManager) {
      return this.overlayComponent._keyManager.activeItem;
    }
    return null;
  }

  /** Reset active item to -1 so arrow events will activate the correct options.*/
  private _resetActiveItem(): void {
    this.overlayComponent._keyManager.setActiveItem(-1);
  }

  ngOnDestroy() {
    this._destroyPanel();
    this._escapeEventStream.complete();
  }

  /** Destroys the autocomplete suggestion panel. */
  private _destroyPanel(): void {
    if (this._overlayRef) {
      this.closePanel();
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
  }


}
