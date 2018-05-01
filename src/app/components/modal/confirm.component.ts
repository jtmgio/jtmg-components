
import { MatDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'confirm-dialog',
    template: `
	<h2 mat-dialog-title>{{ title }}</h2>
	<div mat-dialog-content>
		{{ message }}
	</div>
	<div mat-dialog-actions>
		<button class="jtmgio-raised-button secondary" mat-button mat-raised-button mat-dialog-close color="primary" (click)="close()">
			CANCEL
		</button>
		<button class="jtmgio-raised-button" mat-button mat-raised-button color="accent" (click)="ok()">
			Ok
		</button>
	</div>
	`,
	styleUrls : [ `./_jtmgio-modal-theme.scss` ]
})
export class ConfirmDialog{

    public title: string;
    public message: string;
	public buttons: object;
	
	constructor( public dialogRef: MatDialogRef<ConfirmDialog> ) {}
	
	close(): void{
		this.dialogRef.close( false );
	}
	ok(): void{
		this.dialogRef.close( true );
	}
}