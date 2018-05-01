import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jtmgioModalModule } from "./jtmgio-modal.module";
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
	imports: [
		CommonModule,
		MatDialogModule
	],
	declarations: [
	],
	exports: [
		jtmgioModalModule
	]
})
export class ModalModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: ModalModule
		};
	}
}
