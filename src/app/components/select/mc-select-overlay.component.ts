import { FormControl } from '@angular/forms';
import { MatOption, MatOptgroup, MAT_OPTION_PARENT_COMPONENT, _countGroupLabelsBeforeOption } from '@angular/material';
import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  AfterViewInit,
  ViewChildren,
  QueryList,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
  Inject
} from '@angular/core';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';

import { DOWN_ARROW, UP_ARROW, ENTER, TAB, ESCAPE } from '@angular/cdk/keycodes';
import { delay } from 'rxjs/operators/delay';

/** The height of each autocomplete option. */
export const SELECT_2_OPTION_HEIGHT = 48;

/** The total height of the autocomplete panel. */
export const SELECT_2_PANEL_HEIGHT = 256;

export class Select2SelectedEvent {
  constructor( public source: McSelectOverlayComponent, public value: MatOption | MatOption[]) { }
}

@Component({
  selector: 'jtmgio-select-overlay',
  templateUrl: './jtmgio-select-overlay.component.html',
  styleUrls: ['./jtmgio-select-overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'jtmgioOverlay',
  host : {
    'class' : 'mat-autocomplete',
    '(keydown)' : '_handleKeyDown($event)'
  },
  providers: [
    {
      provide : MAT_OPTION_PARENT_COMPONENT, useExisting: McSelectOverlayComponent
    }
  ]
})
export class McSelectOverlayComponent implements OnInit, AfterViewInit {

  @Input() multiple: boolean;
  @Input() hideFilter: boolean = false;
  @Input() displayWith: ((value: any) => string) | null = null;
  @Input() placeholder: string;
  @Input() disabled: boolean = false;
  @Input() closeOverlay = () => { };
  @Input('class')
  set classList(classList: string) {
    if (classList && classList.length) {
      classList.split(' ').forEach(className => this._classList[className.trim()] = true);
      this._elementRef.nativeElement.className = '';
    }
  }
  @Input() set list(list: Array<ListItem>) {
    if (list) {
      this._list = list;
      this.filter('');
    }
  }
  get list() {
    return this._list;
  }

  @Output() optionSelected: EventEmitter<Select2SelectedEvent> = new EventEmitter<Select2SelectedEvent>();

  @ViewChild(TemplateRef) template: TemplateRef<any>;
  @ViewChildren(MatOption) options: QueryList<MatOption>;
  @ViewChildren(MatOptgroup) optionGroups: QueryList<MatOptgroup>;
  @ViewChild('filterInput') input: ElementRef;
  @ViewChild('panel') panel: ElementRef;

  public selectedOptions = [];

  public showPanel = true;
  public _isOpen = false;
  private _classList: { [key: string]: boolean } = {};
  public _keyManager: ActiveDescendantKeyManager<MatOption>;
  private _list: Array<ListItem> = [];
  private _filteredList: Array<ListItem>;
  public formControl: FormControl = new FormControl('', []);

   /** Whether the autocomplete panel is open. */
  get isOpen(): boolean {
    return this._isOpen;
  }

  constructor(private _changeDetectorRef: ChangeDetectorRef, @Inject(ElementRef) private _elementRef ) { }

  ngOnInit() {
    this._filteredList = this.filter('');
    this.formControl.valueChanges.subscribe((e) => {
      this._filteredList = this.filter(e);
    });
  }
  ngAfterViewInit() {
    this._keyManager = new ActiveDescendantKeyManager<MatOption>(this.options).withWrap();
    this.options.changes.pipe(delay(0)).subscribe(this.recheckOptions.bind(this)); //added the .pipe(delay(0)) to get past errors in change detection
  }

  recheckOptions(visibleOptions) : void {
    let mapper = {};

    this.selectedOptions.forEach((option) => {
      mapper[option] = true;
    });

    visibleOptions.forEach((option) => {
      if (mapper[option.value]) {
        option.select();
      }
      else {
        option.deselect();
      }
    });
  }

  filter(filterString: string): Array<ListItem> {
    return this.list.filter((item) => item.label.toLowerCase().indexOf( filterString ? filterString.toLowerCase() : '') > -1);
  }

  _handleKeyDown(e: KeyboardEvent) {

    if (this.hideFilter) {
      e.preventDefault(); //stops from being able to type in the input when it's hidden
    }

    switch (e.keyCode) {
      case TAB:
      case DOWN_ARROW:
      case UP_ARROW:
        this._keyManager.onKeydown(e);
        this._scrollToOption();
        break;
      case ENTER:
        if (this.activeOption) {
          this.activeOption._selectViaInteraction();
        }
        break;
      case ESCAPE:
        this.closeOverlay();
        break;
    }
  }

  /** The currently active option, coerced to MatOption type. */
  get activeOption(): MatOption | null {
    if (this._keyManager) {
      return this._keyManager.activeItem;
    }
    return null;
  }

  focusInput() {
    this.formControl.reset();
    if (this.input.nativeElement) {
      this.input.nativeElement.focus();
    }
  }

  _setVisibility() {
    this.showPanel = true;
    this._classList['mat-autocomplete-visible'] = this.showPanel;
    this._classList['mat-autocomplete-hidden'] = !this.showPanel;
    this._changeDetectorRef.markForCheck();
}

  _emitSelectEvent(option: MatOption | MatOption[]): void {
    const event = new Select2SelectedEvent(this, option);
    this.optionSelected.emit(event);
  }

  private _scrollToOption(): void {
    const activeOptionIndex = this._keyManager.activeItemIndex || 0;
    const labelCount = _countGroupLabelsBeforeOption(activeOptionIndex,
        this.options, this.optionGroups);
    const optionOffset = (activeOptionIndex + labelCount) * SELECT_2_OPTION_HEIGHT;
    const panelTop = this._getScrollTop();

    if (optionOffset < panelTop) {
      // Scroll up to reveal selected option scrolled above the panel top
      this._setScrollTop(optionOffset);
    } else if (optionOffset + SELECT_2_OPTION_HEIGHT > panelTop + SELECT_2_PANEL_HEIGHT) {
      // Scroll down to reveal selected option scrolled below the panel bottom
      const newScrollTop = optionOffset - SELECT_2_PANEL_HEIGHT + SELECT_2_OPTION_HEIGHT;
      this._setScrollTop(Math.max(0, newScrollTop));
    }
  }

  /**
   * Sets the panel scrollTop. This allows us to manually scroll to display options
   * above or below the fold, as they are not actually being focused when active.
   */
  _setScrollTop(scrollTop: number): void {
    if (this.panel) {
      this.panel.nativeElement.scrollTop = scrollTop;
    }
  }

  /** Returns the panel's scrollTop. */
  _getScrollTop(): number {
    return this.panel ? this.panel.nativeElement.scrollTop : 0;
  }

  tagVisible() {
    this.options.forEach((option, index) => {
      option.select();
    });
    this.focusInput();
  }

  untagVisible() {
    this.options.forEach((option) => {
      option.deselect();
    });
    this.focusInput();
  }

  clearFilter() {

    if (!this.multiple) {
      this.closeOverlay();
      return;
    }
    this.formControl.reset();
  }

}


export interface ListItem {
  id: number;
  label: string;
}
