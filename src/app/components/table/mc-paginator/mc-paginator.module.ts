import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { jtmgioPaginator } from './jtmgio-paginator';
import { jtmgioCustomPaginatorIntl } from './jtmgio-paginator.intl';
import { jtmgioClientDataSource } from './client.datasource';
import { jtmgioHTTPDataSource } from './http.datasource';

@NgModule({
	imports: [
		CommonModule,
		MatButtonModule,
		MatSelectModule,
		MatTooltipModule,
	],
	exports: [ jtmgioPaginator ],
	declarations: [ jtmgioPaginator ],
	providers: [ jtmgioCustomPaginatorIntl ]
})
export class jtmgioPaginatorModule {}