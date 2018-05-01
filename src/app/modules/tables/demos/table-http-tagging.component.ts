//NG Imports
import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, Inject, OnDestroy } from "@angular/core";
import { PageEvent } from "@angular/material";
import { AppService } from "../../../app.service";
import { ijtmgioTable, iColumns, jtmgioPaginator, jtmgioClientDataSource, jtmgioHTTPDataSource, jtmgioTable, MatSort, MatTable } from "../../../components/table/public-api";
import { TablesService } from "../tables.service";
@Component({
	selector: 'jtmgio-tables',
	providers: [TablesService],
	template: `
	<div><h1>Tagging HTTP Paging Table</h1></div>
	<jtmgio-table-header (onChildFilterEvent)="onFilter( $event )" [searchPlaceholder]="'This is a placeholder'" [hasFilter]="true" [filterOnKeyUp]="false" >
		<ng-container table-header>
			<div class="flex">
				<button (click)="tagAllRows()" class="jtmgio-raised-button" mat-raised-button color="jtmgio-green">Tag All Rows</button>
			</div>
		</ng-container>
	</jtmgio-table-header>
		<jtmgio-table-wrapper>
			<ng-container table-body>
				<mat-table #table [dataSource]="dataSource" matSort>
					<ng-container matColumnDef="checked">
						<mat-header-cell *matHeaderCellDef>
						<input type="checkbox" [checked]="isallRowsChecked" (click)="tagAllVisibleRows()"  /> Tag All Visible Rows 
						</mat-header-cell>
						<mat-cell *matCellDef="let row"> 
							<input type="checkbox" [checked]="row.checked" />
						</mat-cell>
					</ng-container>
					<ng-container matColumnDef="first_name">
						<mat-header-cell *matHeaderCellDef mat-sort-header>
							First Name
						</mat-header-cell>
						<mat-cell *matCellDef="let row"> 
							{{ row.first_name }} 
						</mat-cell>
					</ng-container>
					<ng-container matColumnDef="last_name">
						<mat-header-cell *matHeaderCellDef mat-sort-header>
							Last Name
						</mat-header-cell>
						<mat-cell *matCellDef="let row"> 
							{{ row.last_name }} 
						</mat-cell>
					</ng-container>
					<mat-header-row *matHeaderRowDef="columns"></mat-header-row>
					<mat-row *matRowDef="let row; columns: columns"></mat-row>			
				</mat-table>
				<jtmgio-paginator #paginator
					[length]="dataSource.resultsLength"
					[pageIndex]="pageIndex"
					[pageSize]="pageSize"
					[pagerLabel]="pagerLabel"
					[moduleName]="moduleName"
					[useCaching]="useCaching"
					(page)="listenPageEvents($event)"
					[pageSizeOptions]="pageSizeOptions">
				</jtmgio-paginator>
			</ng-container>
		</jtmgio-table-wrapper>
	`
})

export class TableHttpTaggingComponent implements OnInit, OnChanges, ijtmgioTable {
	public columns: string[] = ['checked', 'first_name', 'last_name'];
	public columnDefinitions: iColumns[] = [
		{ name: "checked", canFilter: false, canSort: false, type: "string", searchable: false },
		{ name: "first_name", canFilter: true, canSort: true, type: "string", searchable: true },
		{ name: "last_name", canFilter: true, canSort: true, type: "number", searchable: false }
	];

	public dataSource: jtmgioHTTPDataSource | null;
	public pageIndex: number = 1;
	public pageSize: number = 10;
	public pageSizeOptions: number[] = [5, 10, 15, 25];
	public pagerLabel: string = "Group List Count:";
	public pageEvent: PageEvent;
	public moduleName: string = "testModule";
	public useCaching: boolean = true;
	public currentPage: number = 1;
	public isallRowsChecked: boolean = false;
	@ViewChild(jtmgioPaginator) paginator: jtmgioPaginator;
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatTable) table: jtmgioTable;
	@Input() filter: string;


	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - constructor
	**-------------------------------------------------------------------------------------
	*/
	constructor(
		private service: AppService,
		private tableService: TablesService
	) { }
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - ngOnInit
	**-------------------------------------------------------------------------------------
	*/
	ngOnInit() {
		this.paginator.userPageIndex = 23;
		this.dataSource = new jtmgioHTTPDataSource(
			this.tableService,
			this.paginator,
			this.sort,
			this.columnDefinitions
		);
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - ngOnDestroy
	**-------------------------------------------------------------------------------------
	*/
	ngOnDestroy() {
		this.dataSource.disconnect();
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - tagAllRows
	**-------------------------------------------------------------------------------------
	*/
	tagAllRows() {
		alert("Server endpoint hit! all rows tagged on server, pulling new list");
		//some server request
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - tagAllVisibleRows
	**-------------------------------------------------------------------------------------
	*/
	tagAllVisibleRows() {
		this.isallRowsChecked = !this.isallRowsChecked;
		const taggedRows = this.dataSource.tagAllVisibleRows("checked", this.isallRowsChecked);
		//some service call to tag this rows
		console.log(taggedRows);
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - onFilter
	**-------------------------------------------------------------------------------------
	*/
	onFilter(filter: string) {
		this.dataSource.filter = filter;
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - ngOnChanges
	**-------------------------------------------------------------------------------------
	*/
	ngOnChanges(changes: SimpleChanges) {
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - listenPageEvents
	**-------------------------------------------------------------------------------------
	*/
	listenPageEvents(event) {
	}
}
