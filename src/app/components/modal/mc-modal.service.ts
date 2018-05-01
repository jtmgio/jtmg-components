//NG
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

//3rd party
import { MatDialogModule, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';

//components
import { AlertDialog } from './alert.component';
import { ErrorDialog } from './error.component';
import { ConfirmDialog } from './confirm.component';

/*
**-------------------------------------------------------------------------------------
** METHOD NAME - DefaultModalOptions
** DESC - This is the default model options we are setting as defaults
**-------------------------------------------------------------------------------------
*/
interface DefaultModalOptions {
	width: string,
	panelClass: string,
	backdropClass: string	
}

		
@Injectable()
export class jtmgioModalService {
	private default_options: DefaultModalOptions = {
		width : "500px",
		panelClass : "",
		backdropClass : ""
	};
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - constructor
	**-------------------------------------------------------------------------------------
	*/
	constructor( private dialog: MatDialog ) { }
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - alert
	** DESC - This will open a simple alert modal
	**-------------------------------------------------------------------------------------
	*/
	public alert( title: string, message: string ): Observable<boolean> {
		let dialogRef: MatDialogRef<AlertDialog>;		
		dialogRef = this.dialog.open(AlertDialog, this.default_options );
		dialogRef.componentInstance.title = title;
		dialogRef.componentInstance.message = message;
		return dialogRef.afterClosed();
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - error
	** DESC - This will open a simple alert modal
	**-------------------------------------------------------------------------------------
	*/
	public error(): Observable<boolean> {
		let dialogRef: MatDialogRef<ErrorDialog>;		
		dialogRef = this.dialog.open(ErrorDialog, this.default_options );
		return dialogRef.afterClosed();
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - confirm
	** DESC - This will open a simple confirm modal
	**-------------------------------------------------------------------------------------
	*/
	public confirm( title: string, message: string, buttons: object = {} ): Observable<boolean> {
		let dialogRef: MatDialogRef<ConfirmDialog>;		
		dialogRef = this.dialog.open(ConfirmDialog, this.default_options );
		dialogRef.componentInstance.title = title;
		dialogRef.componentInstance.message = message;
		dialogRef.componentInstance.buttons = buttons;
		return dialogRef.afterClosed();
	}
}