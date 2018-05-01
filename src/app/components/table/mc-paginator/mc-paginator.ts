import { Component, ChangeDetectorRef, Input, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material';

@Component({
	selector: "jtmgio-paginator",
	styleUrls: ["jtmgio-paginator.scss"],
	providers: [],
	template: `
		<div class="mat-paginator-container">
			<div class="mat-paginator-page-size _25">
				<mat-form-field class="mat-paginator-page-size-select">
					<mat-select
						class="mat-paginator-page-size-form-control"
						[value]="pageSize"
						[aria-label]="intlData.itemsPerPageLabel"
						(change)="changePageSize($event.value)">
						<mat-option *ngFor="let pageSizeOption of pageSizeOptions" [value]="pageSizeOption">
							{{pageSizeOption}}
						</mat-option>
					</mat-select>
				</mat-form-field>
				per page
			</div>		 
			<div class="mat-paginator-offset mat-paginator-label _55">{{ pagerLabel }} {{ length }}</div>
			<div class="mat-paginator-range-actions _20">
				page 
				<mat-form-field class="mat-paginator-page-size-select">
					<mat-select
						class="mat-paginator-page-size-form-control"
						[value]="currentPage"
						[aria-label]="intlData.itemsPerPageLabel"
						(change)="changePage($event.value)">
						<mat-option *ngFor="let page of getPages()" [value]="page">
							{{ page  + 1 }}
						</mat-option>
					</mat-select>
				</mat-form-field>
				of <strong>{{ roundPage( length /pageSize ) }}</strong>
				<button type="button"
					class="mat-paginator-navigation-previous"
					(click)="jtmgioPrevPage()"
					[attr.aria-label]="_intl.previousPageLabel"
					[matTooltip]="intlData.previousPageLabel"
					[matTooltipPosition]="'above'"
					[disabled]="!hasPreviousPage()">
					<div class="mat-paginator-increment"></div>
				</button><button type="button"
					class="mat-paginator-navigation-next"
					(click)="jtmgioNextPage()"
					[attr.aria-label]="_intl.nextPageLabel"
					[matTooltip]="intlData.nextPageLabel"
					[matTooltipPosition]="'above'"
					[disabled]="!hasNextPage()">
					<div class="mat-paginator-decrement"></div>
				</button>
			</div>			
		</div>
	`
})
export class jtmgioPaginator extends MatPaginator implements OnInit {
	//keep track of the current page
	public intlData = this._intl;
	public userPageIndex = 0;
	public currentPage: number = 1;
	@Input() useCaching: boolean = false;
	@Input() pagerLabel: string;
	@Input() pageSizeOptions: number[];
	@Input() pageSize: number = 10;
	@Input() moduleName: string;
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - constructor
	**-------------------------------------------------------------------------------------
	*/
	constructor(public intl: MatPaginatorIntl, private changeDetectorRef: ChangeDetectorRef) {
		super(intl, changeDetectorRef);
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - ngOnInit
	**-------------------------------------------------------------------------------------
	*/
	ngOnInit() {
		if (this.useCaching) {
			this.moduleName = this.moduleName.toLowerCase().replace(" ", "");
			const pageSize = window.localStorage.getItem(`${this.moduleName}:pagesize`);
			if (pageSize) {
				this.pageSize = parseInt(pageSize);
			}
		}
		if (this.userPageIndex > 0) {
			this.pageIndex - this.userPageIndex;
			this.currentPage = this.userPageIndex;
		}
		this.currentPage = this.currentPage - 1;
		if (this.currentPage < 0) {
			this.currentPage = 0;
		}
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - getPages
	**-------------------------------------------------------------------------------------
	*/
	getPages() {
		//build page array off length of list
		return Array.from(Array(Math.ceil(this.length / this.pageSize)).keys());
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - changePage
	**-------------------------------------------------------------------------------------
	*/
	public changePage(page: number) {
		this.pageIndex = page - 1;
		this.nextPage();
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - changePageSize
	**-------------------------------------------------------------------------------------
	*/
	public changePageSize(value: number) {
		if (this.useCaching) {
			window.localStorage.setItem(`${this.moduleName}:pagesize`, value.toString());
		}
		this._changePageSize(value);
		return;
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - roundPage
	**-------------------------------------------------------------------------------------
	*/
	roundPage(page: number) {
		return Math.ceil(page);
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - jtmgioNextPage
	**-------------------------------------------------------------------------------------
	*/
	jtmgioNextPage() {
		this.currentPage = this.pageIndex + 1;
		this.nextPage();
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - jtmgioPrevPage
	**-------------------------------------------------------------------------------------
	*/
	jtmgioPrevPage() {
		this.currentPage = this.pageIndex - 1;
		this.previousPage();
	}
}
