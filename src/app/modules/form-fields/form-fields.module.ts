//NG Modules
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatRadioModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule } from "@angular/material";

//app components
import { FormFieldsComponent } from "./form-fields.component";

@NgModule({
	imports: [
		//Vendor Modules
		CommonModule,
		RouterModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatOptionModule, MatSelectModule, MatInputModule,MatNativeDateModule,
		MatRadioModule, MatCheckboxModule, MatDatepickerModule
	],
	declarations: [
		FormFieldsComponent
	],
	entryComponents: [],
	exports : [ FormFieldsComponent ],
	providers: []
})
export class DemoFormFieldsModule { }
