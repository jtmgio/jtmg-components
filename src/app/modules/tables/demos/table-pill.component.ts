//NG Imports
import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, Inject, OnDestroy } from "@angular/core";
import { PageEvent } from "@angular/material";
import { AppService } from "../../../app.service";
import { ijtmgioTable, iColumns, jtmgioPaginator, jtmgioClientDataSource, jtmgioTable, MatSort, MatTable } from "../../../components/table/public-api";
import { jtmgioModalService } from '../../../components/modal/public-api';
import { TablesService } from "../tables.service";
@Component({
	selector: 'jtmgio-tables-pill',
	providers: [TablesService],
	template: `
	<div><h1>Pill Paging Table</h1></div>	
	<jtmgio-table-header [searchPlaceholder]="'This is a placeholder'" [hasFilter]="true" [filterOnKeyUp]="false" >
		<ng-container table-header>
			<div class="flex">
			</div>
		</ng-container>
	</jtmgio-table-header>
		<jtmgio-table-wrapper>
			<ng-container table-body>
				<mat-table #table [dataSource]="dataSource" matSort>
					<ng-container matColumnDef="firstName">
						<mat-header-cell *matHeaderCellDef mat-sort-header>
							First Name
						</mat-header-cell>
						<mat-cell *matCellDef="let row"> 
							{{ row.firstName }} 
						</mat-cell>
					</ng-container>
					<ng-container matColumnDef="lastName">
						<mat-header-cell *matHeaderCellDef mat-sort-header>
							Last Name
						</mat-header-cell>
						<mat-cell *matCellDef="let row"> 
							{{ row.lastName }} 
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
	`
})

export class TablePillComponent implements OnInit, OnChanges, ijtmgioTable {
	public columns: string[] = ['firstName', 'lastName', "status"];
	public columnDefinitions: iColumns[] = [
		{ name: "firstName", canFilter: true, canSort: true, type: "string", searchable: true },
		{ name: "lastName", canFilter: true, canSort: true, type: "string", searchable: false },
		{ name: "status", canFilter: true, canSort: true, type: "number", searchable: false }
	];

	public tableData: any[] = [];
	public dataSource: jtmgioClientDataSource | null;
	public pageIndex: number = 0;
	public pageSize: number = 10;
	public pageSizeOptions: number[] = [5, 10, 15, 25];
	public pagerLabel: string = "Group List Count:";
	public pageEvent: PageEvent;
	public moduleName: string = "statusPillTestModule";
	public useCaching: boolean = false;
	public currentPage: number = 1;
	@ViewChild(jtmgioPaginator) paginator: jtmgioPaginator;
	@ViewChild(MatSort) sort: MatSort;
	@Input() filter: string;

	//Public vars: STATUS PILL
	public dataTableStatus = [
		{ "id": 1, "name": "archived", "color": "GRAY" },
		{ "id": 2, "name": "published", "color": "GREEN" },
		{ "id": 3, "name": "unpublished with a long A double S name", "color": "yellow" },
		{ "id": 4, "name": "canCelled", "color": "red" },
		{ "id": 5, "name": "deleted", "color": "#345678" }
	]
	public disabledList: number[] = [4, 5];
	//private vars: TABLE
	public list = [{ firstName: "Josh", lastName: "Gonzalez", memberTypeId: 10050, status: 1 }, { firstName: "Franklin", lastName: "Beans", memberTypeId: 10052, status: 4 }, { firstName: "Barabra", lastName: "Non", memberTypeId: 10051, status: 3 }, { firstName: "Jack", lastName: "Johnson", memberTypeId: 10053, status: 4 }, { firstName: "John", lastName: "Jackson", memberTypeId: 10054, status: 2 }, { firstName: "Bob", lastName: "The Builder", memberTypeId: 10055, status: 3 }, { firstName: "Max", lastName: "Cheese", memberTypeId: 10056, status: 5 }]




	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - constructor
	**-------------------------------------------------------------------------------------
	*/
	constructor(
		private service: AppService,
		private tableService: TablesService,
		private modalService: jtmgioModalService
	) { }
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - ngOnInit
	**-------------------------------------------------------------------------------------
	*/
	ngOnInit() {
		//initialize table
		//in a normal case you would load the data then initialize the component, this is 
		//more of a test case
		this.renderTable();
		//get server call to table data
		this.tableService.getListClient("pill-users").subscribe((ret) => {
			this.tableData = ret.list;
			//retnder table
			this.renderTable();
		});
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
	** METHOD NAME - renderTable
	**-------------------------------------------------------------------------------------
	*/
	renderTable() {
		//if you want to start on a specific page
		this.paginator.userPageIndex = 5;
		this.dataSource = new jtmgioClientDataSource(
			this.tableData,
			this.paginator,
			this.sort,
			this.columnDefinitions
		);
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
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - putStatus
	** DESC - POST call to update the status. Takes the new id and status value.
	**-------------------------------------------------------------------------------------
	*/
	putStatus(val, id) {
		const submitter: string = this.tableData.find(a => a.memberTypeId === id)["firstName"]
		if (this.disabledList.indexOf(val) > -1) {
			this.modalService.confirm(`Delete Submitter`, `Are you sure you want to remove ${submitter} from this list?`).subscribe(res => {
				if (res) {
					//Fake PUT call then get call
					console.log("Submitter has been removed")
				} else {
					//Get call to change the value back
					console.log("Submitter has not been removed and the status has changed back");
				}
			})
		} else {
			console.log(`The status has changed to ${val} on row ID ${id}`);
		}
	}
}
