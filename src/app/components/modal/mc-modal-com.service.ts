//NG
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

//3rd party
import { MatDialogModule, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';

//components
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
export class jtmgioComponentModalService {
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
	** METHOD NAME - modal
	** DESC - This will generate a blank modal based on the component injected
	**-------------------------------------------------------------------------------------
	*/
	public modal( component: any, options: object = {}, data: object = {} ): Observable<boolean> {
		let dialogRef: MatDialogRef<any>;
		dialogRef = this.dialog.open( component, Object.assign( options, { 
			//panelClass: "panel-background", backdropClass: "overlay-background" 
		}));
		dialogRef.componentInstance.data = data;
		return dialogRef.afterClosed();
	}
}