import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatPaginator, MatSort } from '@angular/material';
import { AbstractTableService } from "./jtmgio-paginator.abstract";
import { iColumns } from "./icolumns.definition";
import { jtmgioPaginator } from "./jtmgio-paginator";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/merge';

export class jtmgioClientDataSource extends DataSource<any>{
	public resultsLength;
	private filterChange = new BehaviorSubject('');
	private searchableKeys: string[] = [];
	private tagDirection: boolean = false;
	public data: any[];
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - contructor
	**-------------------------------------------------------------------------------------
	*/
	constructor(
		private list: any[],	//Must be of type AbstractTableService
		private paginator: jtmgioPaginator,	//we pass reference to the paginator
		private sort: MatSort,	//pass reference to the MatSor
		private columns: iColumns[]	//Column definitions
	) {
		//we have to call super() per NG
		super();
		//need to set the results length initially
		this.resultsLength = list.length;
		this.data = list;
		this.filterChange.subscribe(() => {
			this.paginator.pageIndex = 0
			this.paginator.currentPage = 0;
		});

		//setup the columns
		columns.forEach((item) => {
			if (item.searchable) this.searchableKeys.push(item.name);
		});
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - tagAllVisibleRows
	**-------------------------------------------------------------------------------------
	*/
	tagAllVisibleRows(key: string, tag: boolean = this.tagDirection) {
		const start = this.paginator.pageIndex * this.paginator.pageSize;
		const end = start + this.paginator.pageSize;
		const visible = this.data.slice(start, end);
		return visible.map(item => {
			item[key] = tag;
			return item;
		});
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - tagAllVisibleRows
	**-------------------------------------------------------------------------------------
	*/
	tagAllRows(key: string, tag: boolean = this.tagDirection) {
		return this.data.map(item => {
			item[key] = tag;
			return item;
		});
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
	** METHOD NAME - connect
	**-------------------------------------------------------------------------------------
	*/
	connect(): Observable<any[]> {
		//page and sort change events
		const displayDataChanges = [
			this.paginator.page,
			this.sort.sortChange,
			this.filterChange
		];

		if (this.paginator.userPageIndex > 0) {
			this.paginator.userPageIndex = this.paginator.userPageIndex;
			this.paginator.pageIndex = this.paginator.userPageIndex - 1;
			this.paginator.currentPage = this.paginator.userPageIndex - 1;
		}
		//if sorting is done go to page 1
		this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

		//merge in event streams
		return Observable.merge(...displayDataChanges)
			.map(() => {
				//figure out the page based pagesize/pageindex
				//the full count
				//slice data to conform to page options
				//if we arent sorting do nothing in reg ards to sorting
				if (!this.sort.active || this.sort.direction == "") {

					//lets filter the list down first
					let list = this.list.filter(item => {
						return this.filterList(item);
					});
					//return the sliced list
					const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
					this.resultsLength = list.length;
					return list.splice(startIndex, this.paginator.pageSize);
				}
				//lets start the sorting				
				//sort by name
				let sort = this.list.filter(item => {
					return this.filterList(item);
				});

				const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
				//Holds all of the sub comparator functions
				const subComparators = {
					string: (a, b) => {
						return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
					},
					number: (a, b) => {
						return Number(a) - Number(b);
					},
					date: (a, b) => {
						const result = new Date(a).valueOf() - new Date(b).valueOf();
						return result || 0;
					}
				};
				//Main comparator that does error checking and chooses the subComparator and picks out the data to compare
				const comparator = (a, b) => {

					const { active, direction } = this.sort;
					const columnData = this.columns.find((item) => item.name === active);

					if (!columnData || !columnData.canSort || !subComparators[columnData.type]) { //add all condtions to break out of the sort comparison here
						return 0;
					}

					const item1 = a[active];
					const item2 = b[active];

					const result = subComparators[columnData.type](item1, item2) || 0;

					return direction === "desc" ? result * -1 : result; //multiplying by -1 flips the direction
				};

				sort = sort.sort(comparator);

				this.resultsLength = sort.length;

				return sort.splice(startIndex, this.paginator.pageSize);
			})
			.catch(() => {
				return Observable.of([]);
			});

	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - sliceList
	**-------------------------------------------------------------------------------------
	*/
	sliceList(data: any[], startIndex: number) {
		return data.slice(startIndex, startIndex + this.paginator.pageSize);
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - sliceList
	**-------------------------------------------------------------------------------------
	*/
	filterList(item) {
		let flag;
		for (let prop in item) {
			flag = false;
			if (this.searchableKeys.indexOf(prop) > -1) {
				flag = item[prop].toString().toLowerCase().indexOf(this.filter.toLowerCase()) != -1;
				if (flag) break;
			}
		}
		return flag;
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - disconnect
	**-------------------------------------------------------------------------------------
	*/
	disconnect() { }

}
