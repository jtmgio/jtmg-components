import { MatSort } from '@angular/material';
import { jtmgioClientDataSource } from "./jtmgio-paginator/client.datasource";
import { jtmgioHTTPDataSource } from "./jtmgio-paginator/http.datasource";
import { jtmgioPaginator } from "./jtmgio-paginator/jtmgio-paginator";
export interface ijtmgioTable {
	columns: string[];
	dataSource: jtmgioClientDataSource | jtmgioHTTPDataSource | null;
	pageIndex: number;
	pageSize: number;
	pageSizeOptions: number[];
	paginator: jtmgioPaginator;
	sort: MatSort;
}