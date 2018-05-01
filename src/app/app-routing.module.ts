import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//gneral routes
import { AppComponent } from "./app.component";
import { ComponentListComponent } from "./component-list.component";
import { PageNotFoundComponent } from "./not-found.component";

//Modals
import { ModalsComponent } from "./modules/modals/modals.component";

//Selects 
import { SelectsComponent } from "./modules/selects/selects.component";

//Form Fields
import { FormFieldsComponent } from "./modules/form-fields/form-fields.component";


const appRoutes: Routes = [
	
	//tables
	{ path: 'components/tables', loadChildren: "app/modules/tables/tables.module#DemoTablesModule" },
	//form fields
	{ path: "components/form-fields", component: FormFieldsComponent },
	
	//modals
	{ path: "components/modals", component: ModalsComponent },

	//selecte
	{ path: "components/selects", component: SelectsComponent },
	
	//general
	{ path: "components/component-list", component: ComponentListComponent },
	{ path: '', redirectTo: "components/component-list", pathMatch: "full" },
	{ path: "**", component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: false }
		)
	],
	exports: [
		RouterModule
	],
	providers: []
})
export class AppRoutingModule { }
