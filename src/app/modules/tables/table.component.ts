//NG Imports
import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
	selector: 'jtmgio-tables',
	styleUrls:[ './table.scss' ],
	template: `
		<header>
			<h2>Tables</h2>
			<p>Please make sure you are using <strong>"npm run ngserver"</strong></p>
		</header>		
		<nav>
			<button [routerLink]='["/components/tables/client-table"]' class="jtmgio-raised-button" mat-raised-button color="jtmgio-green">Client Paging Table</button>
			<button [routerLink]='["/components/tables/client-tagging-table"]' class="jtmgio-raised-button" mat-raised-button color="jtmgio-green">Client Tagging Paging Table</button>
			<button [routerLink]='["/components/tables/http-table"]' class="jtmgio-raised-button" mat-raised-button color="jtmgio-green">HTTP Paging Table</button>
			<button [routerLink]='["/components/tables/http-tagging-table"]' class="jtmgio-raised-button" mat-raised-button color="jtmgio-green">HTTP Tagging Paging Table</button>
			<button [routerLink]='["/components/tables/pills-table"]' class="jtmgio-raised-button" mat-raised-button color="jtmgio-green">Pill Paging Table</button>
		</nav>
		<router-outlet></router-outlet>
	`
})

export class TablesComponent {
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - constructor
	**-------------------------------------------------------------------------------------
	*/
	constructor(
	) { }
}
