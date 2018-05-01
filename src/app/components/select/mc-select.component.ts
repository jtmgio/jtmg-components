import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Select2SelectedEvent } from './jtmgio-select-overlay.component';
import { FormControl } from '@angular/forms';
import { McSelectTriggerDirective } from './jtmgio-select-trigger.directive';

@Component({
  selector: 'jtmgio-select',
  templateUrl: './jtmgio-select.component.html',
  styleUrls: ['./jtmgio-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class McSelectComponent {

  @Input() multiple: boolean;
  @Input() hideFilter: boolean = false;
  @Input() list;
  @Input() control: FormControl;
  @Input() disabled: boolean = false;

  @Input() displayWith: ((value: any) => string) | null = null;

  @Input() placeholder: string;

  @Output() optionSelected: EventEmitter<Select2SelectedEvent> =
    new EventEmitter<Select2SelectedEvent>();
  
  @ViewChild(McSelectTriggerDirective) theTrigger: McSelectTriggerDirective;
  
  constructor() { }

  closeOverlay(event) {
    if (this.theTrigger.panelOpen) {
      event.stopPropagation();
      this.theTrigger.closePanel();
    }  
  }
}
