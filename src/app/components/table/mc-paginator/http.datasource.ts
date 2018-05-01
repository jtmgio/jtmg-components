import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from "rxjs/Subject";
import { MatPaginator, MatSort } from '@angular/material';
import { AbstractTableService } from "./jtmgio-paginator.abstract";
import { iColumns } from "./icolumns.definition";
import { iHTTPData } from "./ihttpdata.definition";
import { jtmgioPaginator } from "./jtmgio-paginator";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/merge';
import { skip } from "rxjs/operators";



export class jtmgioHTTPDataSource extends DataSource<any>{
	public resultsLength = 0;
	private filterChange = new BehaviorSubject('');
	private queryStringChange = new BehaviorSubject('');
	private tagDirection: boolean = false;
	public isLoading: boolean = false;
	public data: iHTTPData;
	public dataTableLoadingChange = new BehaviorSubject(true);
	public tableDataChange = new BehaviorSubject(this.data);
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - contructor
	**-------------------------------------------------------------------------------------
	*/
	constructor(
		private service: AbstractTableService,	//Must be of type AbstractTableService
		private paginator: jtmgioPaginator,	//we pass reference to the paginator
		private sort: MatSort,	//pass reference to the MatSor
		private columns: iColumns[]	//Column definitions
	) {
		//we have to call super() per NG
		super();
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - getFilter
	**-------------------------------------------------------------------------------------
	*/
	get filter(): string {
		return this.filterChange.value;
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - setFilter
	**-------------------------------------------------------------------------------------
	*/
	set filter(filter: string) {
		this.filterChange.next(filter);
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - getFilter
	**-------------------------------------------------------------------------------------
	*/
	get queryString(): string {
		return this.queryStringChange.value;
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - setFilter
	**-------------------------------------------------------------------------------------
	*/
	set queryString(queryString: string) {
		this.queryStringChange.next(queryString);
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - getFilter
	**-------------------------------------------------------------------------------------
	*/
	getTableData(): Observable<iHTTPData> {
		return this.tableDataChange.asObservable();
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - setFilter
	**-------------------------------------------------------------------------------------
	*/
	setTableData(data: iHTTPData) {
		this.tableDataChange.next(data);
	}

	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - isLoading
	**-------------------------------------------------------------------------------------
	*/
	isDataTableLoading(): Observable<boolean> {
		return this.dataTableLoadingChange.asObservable();
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - setLoading
	**-------------------------------------------------------------------------------------
	*/
	setDataTableLoading(loading: boolean) {
		this.dataTableLoadingChange.next(loading);
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - tagAllVisibleRows
	**-------------------------------------------------------------------------------------
	*/
	tagAllVisibleRows(key: string, tag: boolean = this.tagDirection) {
		return this.data.list.map(item => {
			item[key] = tag;
			return item;
		});
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - connect
	**-------------------------------------------------------------------------------------
	*/
	connect(): Observable<any[]> {
		this.setDataTableLoading(true);
		this.isLoading = true;
		//page and sort change events
		const displayDataChanges = [
			this.paginator.page,
			this.sort.sortChange,
			this.filterChange,
			this.queryStringChange
		];
		if (this.paginator.userPageIndex > 0) {
			this.paginator.pageIndex = this.paginator.userPageIndex - 1;
			this.paginator.currentPage = this.paginator.userPageIndex - 1;
		}
		//if sorting is done go to page 1
		this.sort.sortChange.subscribe(() => {
			this.setDataTableLoading(true);
			this.paginator.pageIndex = 0;
			this.paginator.currentPage = 0;
		});

		//if filtering is done go to page 1
		this.filterChange.subscribe(() => {
			if (this.filter.length) {
				this.setDataTableLoading(true);
				this.paginator.pageIndex = 0;
				this.paginator.currentPage = 0;
			}
		})

		//merge in event streams
		return Observable.merge(...displayDataChanges)
			//Emit given value first
			//https://www.learnrxjs.io/operators/combination/startwith.html
			.startWith(null)
			//Map to observable, complete previous inner observable, emit values
			//https://www.learnrxjs.io/operators/transformation/switchmap.html
			.skip(2)
			.switchMap(() => {
				return this.service.getList((this.paginator.pageIndex + 1), this.sort.active, this.sort.direction, this.filter, this.paginator.pageSize, this.queryString);
			})
			.map((data: iHTTPData) => {
				this.resultsLength = data.count;
				this.data = data;
				this.setDataTableLoading(false);
				this.setTableData(data);
				this.isLoading = false;
				return data.list;
			})
			.catch(() => {
				//console.log( "canceled" );
				this.setDataTableLoading(false);
				return Observable.of([]);
			});
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - disconnect
	**-------------------------------------------------------------------------------------
	*/
	disconnect() { }

}
