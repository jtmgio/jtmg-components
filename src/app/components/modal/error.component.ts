//NG
import { Component } from '@angular/core';

//3rd party
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'jtmgio-ui-modal',
    template: `
		<h2 mat-dialog-title>Oops!</h2>
		<div mat-dialog-content>
			<div class="sub-header">
				<p>
					Something went wrong. Please try this action again. If the problem persists, refreshing the page may help.				
					Our engineers have already been alerted to the problem and are looking into it.				
				</p>
			</div>
		</div>	
		<div mat-dialog-actions>
			<button class="jtmgio-raised-button" mat-button mat-raised-button color="accent" (click)="ok()">
				Ok
			</button>
		</div>
	`,
	styleUrls : [ `./_jtmgio-modal-theme.scss` ]
})

export class ErrorDialog{
	//vars
    public title: string;
    public message: string;
	
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - constructor
	**-------------------------------------------------------------------------------------
	*/
	constructor( public dialogRef: MatDialogRef<ErrorDialog> ) {}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - OK
	**-------------------------------------------------------------------------------------
	*/
	ok(): void{
		this.dialogRef.close( true );
	}
}