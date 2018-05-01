//NG
import { Component } from '@angular/core';

//3rd party
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'jtmgio-ui-modal',
    template: `
		<h2 mat-dialog-title>{{ title }}</h2>
		<div mat-dialog-content>
			<div class="sub-header">
				{{ message }}
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

export class AlertDialog{
	//vars
    public title: string;
    public message: string;
	
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - constructor
	**-------------------------------------------------------------------------------------
	*/
	constructor( public dialogRef: MatDialogRef<AlertDialog> ) {}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - OK
	**-------------------------------------------------------------------------------------
	*/
	ok(): void{
		this.dialogRef.close( true );
	}
}