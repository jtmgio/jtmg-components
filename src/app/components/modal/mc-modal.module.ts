import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';  
import { 
	MatIconModule, 
	MatButtonModule, 
	MatDialogModule, 
	MatTableModule, 
	MatPaginatorModule, 
	MatSortModule, 
	MatInputModule  
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { jtmgioModalService } from "./jtmgio-modal.service";
import { jtmgioComponentModalService } from "./jtmgio-modal-com.service";
import { AlertDialog } from './alert.component';
import { ErrorDialog } from './error.component';
import { ConfirmDialog } from './confirm.component';

@NgModule({
	declarations : [
		AlertDialog,
		ConfirmDialog,
		ErrorDialog
	],
	imports : [
		MatIconModule, 
		MatButtonModule, 
		MatDialogModule, 
		MatTableModule, 
		MatPaginatorModule, 
		MatSortModule, 
		MatInputModule,
		CommonModule		
	],
	exports : [],
	entryComponents : [
		AlertDialog,
		ConfirmDialog,
		ErrorDialog
	],
	providers : [ jtmgioModalService, jtmgioComponentModalService ]
})

export class jtmgioModalModule {}