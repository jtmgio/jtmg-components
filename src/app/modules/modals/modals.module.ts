//NG Modules
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

//Shared
import { ModalModule } from "../../components/modal/public-api"; 

//app components
import { ModalsComponent } from "./modals.component";
import { ModalTestComponent } from "./test-modal.component";

@NgModule({
	imports: [
		//Vendor Modules
		CommonModule,
		RouterModule,
		MatButtonModule,
		MatCardModule,
		//shared
		ModalModule
	],
	declarations: [
		ModalsComponent,
		ModalTestComponent
	],
	entryComponents: [ ModalTestComponent ],
	exports : [],
	providers: []
})
export class DemoModalsModule { }
