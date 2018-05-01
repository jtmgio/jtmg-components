import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatOptionModule, MatCommonModule, MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { McSelectOverlayComponent } from "./jtmgio-select-overlay.component";
import { McSelectComponent } from "./jtmgio-select.component";
import { McSelectTriggerDirective, jtmgio_SELECT_2_SCROLL_STRATEGY_PROVIDER } from "./jtmgio-select-trigger.directive";
@NgModule({
	declarations : [
		McSelectOverlayComponent,
    	McSelectTriggerDirective,
    	McSelectComponent
	],
	imports : [
		CommonModule,
		ReactiveFormsModule,
		OverlayModule,
		MatOptionModule,
		MatInputModule,
		MatCommonModule,
		MatButtonModule,
		MatIconModule
	],
	exports: [ McSelectOverlayComponent, McSelectComponent, MatOptionModule, McSelectTriggerDirective, MatCommonModule, MatInputModule ],
	entryComponents : [
		McSelectOverlayComponent
	],
	providers : [ jtmgio_SELECT_2_SCROLL_STRATEGY_PROVIDER ]
})

export class jtmgioSelectModule {}
