import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";
import { map, filter, scan } from 'rxjs/operators';

import { AbstractTableService } from "../../components/table/jtmgio-paginator/jtmgio-paginator.abstract";
@Injectable()
export class TablesService implements AbstractTableService {
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - constructor
	**-------------------------------------------------------------------------------------
	*/
	constructor(private http: HttpClient) { }
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - getList
	**-------------------------------------------------------------------------------------
	*/
	getList(page, sort = "first_name", order, search = "", pageSize, queryString = ""): Observable<any> {
		const url = `http://localhost:3000/users?_page=${page}&_limit=${pageSize}&_sort=${sort}&_order=${order}&q=${search}`;
		return this.http.get(url).pipe(
			map((data: any) => {
				return {
					list: data,
					count: (search.length ? data.length : 999)
				};
			})
		);
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - getListCLient
	**-------------------------------------------------------------------------------------
	*/
	getListClient(endpoint: string = "users") {
		const url = `http://localhost:3000/${endpoint}`;
		return this.http.get(url).pipe(
			map((data: any) => {
				return {
					list: data
				};
			})
		);
	}
}
