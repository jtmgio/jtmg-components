//Vendor Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { Router } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

//Shared Modules
import { AppRoutingModule } from "./app-routing.module";

//Demo Modules
import { DemoModalsModule } from "./modules/modals/modals.module";
import { DemoSelectsModule } from "./modules/selects/selects.module";
import { DemoFormFieldsModule } from "./modules/form-fields/form-fields.module";
//components
import { AppComponent } from './app.component';
import { ComponentListComponent } from "./component-list.component";
import { PageNotFoundComponent } from "./not-found.component";


@NgModule({
	declarations: [
		AppComponent,
		ComponentListComponent,
		PageNotFoundComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		BrowserAnimationsModule,		
		MatListModule,
		MatDividerModule,
		
		//shared
		AppRoutingModule,			

		//demo modules
		DemoModalsModule,
		DemoSelectsModule,
		DemoFormFieldsModule

	],
	providers: [],
	entryComponents: [],
	bootstrap: [ AppComponent ]
})
export class AppModule { 
	constructor( router: Router ){}	
}
