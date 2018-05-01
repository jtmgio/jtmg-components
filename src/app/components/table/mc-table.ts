import { Component, Input, Output, OnInit } from "@angular/core";
import { MatSort, MatTable } from '@angular/material';

@Component({
	selector: "jtmgio-table-wrapper",
	template: `
		<ng-content select="[table-body]"></ng-content>
	`,
	styleUrls: ['./jtmgio-table.scss'],
	providers: []
})

export class jtmgioTable implements OnInit {

	constructor() { }

	ngOnInit() {
	}
}