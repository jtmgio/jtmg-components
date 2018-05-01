//NG Imports
import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, Inject, OnDestroy } from "@angular/core";
import { PageEvent } from "@angular/material";
import { Observable, Subscription, Subject } from 'rxjs/Rx';
import { AppService } from "../../../app.service";
import { ijtmgioTable, iColumns, jtmgioPaginator, jtmgioClientDataSource, jtmgioHTTPDataSource, jtmgioTable, MatSort, MatTable } from "../../../components/table/public-api";
import { TablesService } from "../tables.service";
@Component({
	selector: 'jtmgio-tables',
	providers: [TablesService],
	template: `
	<mat-spinner class="spinner" *ngIf="tableLoading" color="accent"></mat-spinner>
	<div><h1>HTTP Paging Table</h1></div>
	<jtmgio-table-header (onChildFilterEvent)="onFilter( $event )" [searchPlaceholder]="'This is a placeholder'" [hasFilter]="true" [filterOnKeyUp]="false" >
		<ng-container table-header>
			<div class="flex">
			</div>
		</ng-container>
	</jtmgio-table-header>
		<jtmgio-table-wrapper>
			<ng-container table-body>
				<mat-table #table [dataSource]="dataSource" matSort>
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
					<ng-container matColumnDef="status">
					<mat-header-cell *matHeaderCellDef mat-sort-header>
						Status
					</mat-header-cell>
					<mat-cell *matCellDef="let row"> 
					<jtmgio-status-pill [statusId]="row.status" [disabledSelect]="disabledList"[status]="dataTableStatus" (updateStatus)="putStatus($event,row.memberTypeId)"></jtmgio-status-pill>
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
	`,
	styles: [`
		.spinner {
			position: absolute;
			top: 350px;
			left: calc(50vw - 50px);
			z-index: 100;
		}
	`]
})

export class TableHttpComponent implements OnInit, OnChanges, ijtmgioTable {
	public columns: string[] = ['first_name', 'last_name'];
	public columnDefinitions: iColumns[] = [
		{ name: "first_name", canFilter: true, canSort: true, type: "string", searchable: true },
		{ name: "last_name", canFilter: true, canSort: true, type: "number", searchable: false }
	];
	public dataSource: jtmgioHTTPDataSource | null;
	public pageIndex: number = 0;
	public pageSize: number = 10;
	public pageSizeOptions: number[] = [5, 10, 15, 25];
	public pagerLabel: string = "Group List Count:";
	public pageEvent: PageEvent;
	public moduleName: string = "testModule";
	public useCaching: boolean = true;
	public currentPage: number = 1;
	public tableLoading: boolean = true;
	private unsubscribe$: Subject<boolean> = new Subject();

	@ViewChild(jtmgioPaginator) paginator: jtmgioPaginator;
	@ViewChild(MatSort) sort: MatSort;
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
		this.paginator.userPageIndex = 5;
		this.dataSource = new jtmgioHTTPDataSource(
			this.tableService,
			this.paginator,
			this.sort,
			this.columnDefinitions
		);
		this.dataSource.isDataTableLoading()
			.takeUntil(this.unsubscribe$)
			.subscribe((isLoading) => {
				this.tableLoading = isLoading;
				console.log(isLoading);
			});
		this.dataSource.getTableData()
			.takeUntil(this.unsubscribe$)
			.subscribe(data => {
				if (data) {
					if (data.count > 0) {
						console.log("there is a data returned");
					}
				}
			})
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - ngOnDestroy
	**-------------------------------------------------------------------------------------
	*/
	ngOnDestroy() {
		this.dataSource.disconnect();
		this.unsubscribe$.next(true);
		this.unsubscribe$.complete();
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
