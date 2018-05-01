import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';


import { TablesComponent } from "./table.component";
import { TableClientComponent } from "./demos/table-client.component";
import { TableHttpComponent } from "./demos/table-http.component";
import { TablePillComponent } from "./demos/table-pill.component";
import { TableHttpTaggingComponent } from "./demos/table-http-tagging.component";
import { TableClientTaggingComponent } from "./demos/table-client-tagging.component";

const routes: Routes = [
	{
		path : '',
		component: TablesComponent,
		children: [
			{ path: "client-table", component: TableClientComponent },
			{ path: "http-table", component: TableHttpComponent },
			{ path: "pills-table", component: TablePillComponent },
			{ path: "http-tagging-table", component: TableHttpTaggingComponent },
			{ path: "client-tagging-table", component: TableClientTaggingComponent }

		]
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class TablesRoutingModule { }