//Vendor Modules
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

//Shared
import { TableModule } from "../../components/table/public-api";
import { jtmgioStatusPillModule } from '../../components/status-pill/status-pill.module';

import { TablesRoutingModule } from "./table-routing.module";

//App components
import { TablesComponent } from "./table.component";
import { TableClientComponent } from "./demos/table-client.component";
import { TableHttpComponent } from "./demos/table-http.component";
import { TablePillComponent } from "./demos/table-pill.component";
import { TableHttpTaggingComponent } from "./demos/table-http-tagging.component";
import { TableClientTaggingComponent } from "./demos/table-client-tagging.component";

import { TablesService } from "./tables.service";
@NgModule({
	imports: [
		jtmgioStatusPillModule,
		CommonModule,
		RouterModule,
		TableModule,
		HttpClientModule,
		TablesRoutingModule,
		MatProgressSpinnerModule
	],
	declarations: [
		TablesComponent, TableHttpComponent, TablePillComponent, TableClientComponent, TableHttpTaggingComponent, TableClientTaggingComponent
	],
	exports: [TablesComponent],
	providers: [TablesService]
})
export class DemoTablesModule { }
