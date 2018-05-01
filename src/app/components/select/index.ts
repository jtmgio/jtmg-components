import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jtmgioSelectModule } from "./jtmgio-select.module";
export { McSelectOverlayComponent, Select2SelectedEvent } from "./jtmgio-select-overlay.component";
export { McSelectTriggerDirective } from "./jtmgio-select-trigger.directive";
import { McSelectComponent } from './jtmgio-select.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports: [
    jtmgioSelectModule,
  ]
})
export class SelectModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: jtmgioSelectModule,
      providers: [ ]
    };
  }
}
