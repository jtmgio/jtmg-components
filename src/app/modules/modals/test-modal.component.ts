import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
	selector: "tmp",
	template: `
			<h2 mat-dialog-title>A really cool title</h2>
			<div mat-dialog-content>
				<p>Some content
			</div>
			<div mat-dialog-actions>
				<button class="jtmgio-raised-button secondary" mat-button mat-raised-button mat-dialog-close (click)="close( $event )">
					CANCEL
				</button>
				<button 
					(click)="save()"
					class="jtmgio-raised-button"
					mat-button mat-raised-button 
					color="jtmgio-green">
					Save
				</button>
			</div>
	`,
	styleUrls : [ `../../components/modal/_jtmgio-modal-theme.scss` ]
})
export class ModalTestComponent{
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - constructor
	**-------------------------------------------------------------------------------------
	*/	
	constructor(
		public dialog: MatDialogRef<ModalTestComponent>
	){}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - close
	**-------------------------------------------------------------------------------------
	*/
	close( event: FocusEvent ): void{
		this.dialog.close();
		event.preventDefault();
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - save
	**-------------------------------------------------------------------------------------
	*/
	save(): void{
		this.dialog.close();
	}		
}



