//Angular
import { Component, Input, Output, EventEmitter } from '@angular/core';

//App
import { statusPillDataModel } from './status-pill.model';

export enum colorStatusPill {
	GREEN = '#6CC24A',
	RED = '#CC474C',
	GRAY = '#767676',
	YELLOW = '#F1C400'
}

@Component({
	selector: 'jtmgio-status-pill',
	template: `
		<mat-form-field class="status_pill--container">
			<span class="status_pill--circle" [ngStyle]="{'background-color':color(status, statusId)}"></span>
  			<mat-select [(value)]="statusId" (change)='putStatus($event.value)' [disabled]='disabledSelect.indexOf(statusId) > -1'>
  				<mat-option *ngFor="let stat of status" [value]="stat.id">{{stat.name | titlecase}} </mat-option>
  			</mat-select>
 		</mat-form-field>
  `,
  styleUrls: ['./status-pill.component.scss']
	
})
export class jtmgioStatusPillComponent {
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - constructor
	**-------------------------------------------------------------------------------------
	*/  
	constructor( ) { }

	//Inputs for reciving data for Post Call
	@Input() status:statusPillDataModel[];
	@Input() statusId: number;
	@Input() disabledSelect:number[] = [];
	//Output for onChange event to update 
	@Output() updateStatus : EventEmitter<any> = new EventEmitter<any>();
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - putStatus
	** DESC - Emits for a POST call to update the form status. Takes the form id and status value.
	**-------------------------------------------------------------------------------------
	*/  
	putStatus( status ){
		this.updateStatus.emit( status );
		return;
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - color
	** DESC - Creates a query string from an object
	**-------------------------------------------------------------------------------------
	*/
	color( status : any[], id : number ):string{
		const changeColor = colorStatusPill[(status.find( index => index.id == id).color).toUpperCase()];
		return changeColor == null ? status.find( index => index.id == id).color : changeColor;
	}
}