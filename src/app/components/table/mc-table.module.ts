import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { 
	MatPaginator, 
	MatSort, 
	MatTable,
	MatPaginatorIntl, 
	MatSelect, 
	MatTooltipModule, 
	MatButtonModule, 
	MatDialogModule, 
	MatTableModule, 
	MatPaginatorModule, 
	MatSelectModule,
	MatSortModule, 
	MatFormFieldModule,
	MatInputModule,
	MatIconModule,
	MatCardModule,
	MatProgressSpinnerModule
	
} from "@angular/material";
import { jtmgioPaginatorModule } from "./jtmgio-paginator/jtmgio-paginator.module";
import { jtmgioCustomPaginatorIntl } from "./jtmgio-paginator/jtmgio-paginator.intl";
import { jtmgioPaginator } from "./jtmgio-paginator/jtmgio-paginator";
import { jtmgioTable } from "./jtmgio-table";
import { jtmgioTableHeader } from "./jtmgio-table-header";
@NgModule({
	declarations: [
		jtmgioTable,
		jtmgioTableHeader
	],
	imports: [
		jtmgioPaginatorModule,
		MatTableModule,
		MatSelectModule,
		MatTooltipModule,
		MatFormFieldModule,
		MatInputModule,
		MatSortModule,
		MatButtonModule,
		CommonModule,
		MatCardModule,
		MatIconModule,
		FormsModule, 
		ReactiveFormsModule,
		MatProgressSpinnerModule
	],
	exports: [
		jtmgioPaginatorModule,
		jtmgioPaginator,
		jtmgioPaginatorModule,
		MatTableModule,
		MatSelectModule,
		MatTooltipModule,
		MatFormFieldModule,
		MatInputModule,
		MatSortModule,
		MatButtonModule,
		jtmgioTable,
		MatSort,
		MatTable,
		jtmgioTableHeader
	],
	providers: [{
		provide: MatPaginatorIntl, useClass: jtmgioCustomPaginatorIntl
	}]
})
export class jtmgioTableModule {}   
