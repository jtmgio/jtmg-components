import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jtmgioTableModule } from "./jtmgio-table.module";
import { jtmgioPaginatorModule } from "./jtmgio-paginator/jtmgio-paginator.module";

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
	],
	exports: [
		jtmgioTableModule,
		jtmgioPaginatorModule,
	]
})
export class TableModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: TableModule
		};
	}
}
