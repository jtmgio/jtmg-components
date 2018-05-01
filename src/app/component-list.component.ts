//NG Imports
import { Component, OnInit } from '@angular/core';
import { MatSelectionList } from "@angular/material";
@Component({
	selector: 'jtmgio-component-list',
	template: `
		<mat-selection-list>
			<a mat-list-item routerLink="/components/{{ link }}" *ngFor="let link of links"> {{ link | titlecase }} Component </a>
		</mat-selection-list>
	`
})
export class ComponentListComponent implements OnInit {
	public links: string[] = [ "tables", "modals", "selects", "form-fields" ];
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - constructor
	**-------------------------------------------------------------------------------------
	*/
	constructor() {}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - ngOnInit
	**-------------------------------------------------------------------------------------
	*/
	ngOnInit(){
	}
}
