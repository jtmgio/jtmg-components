//NG Modules
import { NgModule } from '@angular/core';
import { MatSelectModule, MatIconModule } from "@angular/material";
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';

//app components
import { jtmgioStatusPillComponent } from "./status-pill.component";

@NgModule({
	imports: [
		//Vendor Modules
		MatSelectModule,
		FormsModule,
		CommonModule,
		MatIconModule
	],
	declarations: [
		jtmgioStatusPillComponent
	],
	entryComponents: [],
	exports : [ jtmgioStatusPillComponent ],
	providers: []
})
export class jtmgioStatusPillModule { }
