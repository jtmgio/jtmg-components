//Vendor
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

//shared
import { jtmgioModalService, jtmgioComponentModalService } from "../../components/modal/public-api";

import {ModalTestComponent} from "./test-modal.component";
@Component({
	selector: 'jtmgio-modals',
	template: `
		<mat-card>
			<mat-card-header><mat-card-title>Alert Modals</mat-card-title></mat-card-header>
			<mat-card-content>
				<button (click)="openAlert( $event )" class="jtmgio-raised-button" mat-raised-button>Open Alert Modal</button>
			</mat-card-content>

		</mat-card>
		<mat-card>
			<mat-card-header><mat-card-title>Confirm Modals</mat-card-title></mat-card-header>
			<mat-card-content>
				<button (click)="openConfirm( $event )" class="jtmgio-raised-button" mat-raised-button>Open Confirm Modal</button>
			</mat-card-content>
		</mat-card>
		<mat-card>
			<mat-card-header><mat-card-title>Error Modals</mat-card-title></mat-card-header>
			<mat-card-content>
				<button (click)="openError( $event )" class="jtmgio-raised-button" mat-raised-button>Open Alert Modal</button>
			</mat-card-content>
		</mat-card>
		<mat-card>
			<mat-card-header><mat-card-title>Component Modals</mat-card-title></mat-card-header>
			<mat-card-content>
				<button (click)="openComponent( $event )" class="jtmgio-raised-button" mat-raised-button>Open Component Modal</button>
			</mat-card-content>
		</mat-card>		
	`,
	styles: [ `
		mat-card{ 
			margin:30px 0; 
		}
		mat-card-header mat-card-title{
			font-size:16px;
			font-weight:800;
		}
	`],
	providers: [ jtmgioComponentModalService ]
})

export class ModalsComponent implements OnInit {
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - constructor
	**-------------------------------------------------------------------------------------
	*/	
	constructor(
		private service : jtmgioModalService,
		private comService : jtmgioComponentModalService
	) {}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - ngOnInit
	**-------------------------------------------------------------------------------------
	*/
	ngOnInit() {
	}	
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - openAlert
	**-------------------------------------------------------------------------------------
	*/
	public openAlert( vent: Event ): void{
		this.service.alert( "Alert Modal", "the alert body" ).subscribe(()=>{
			console.log( "closed" );
			return;
		})
		return;	
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - openConfirm
	**-------------------------------------------------------------------------------------
	*/
	public openConfirm( vent: Event ): void{
		this.service.confirm( "Conform Modal", "the alert body" ).subscribe(( resp )=>{
			if( resp ){
				console.log( "ok was clicked" );
				return;
			}
			console.log( "cancel was clicked" );
			return;
		})
		return;		
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - openError
	**-------------------------------------------------------------------------------------
	*/
	public openError( vent: Event ): void{
		this.service.error().subscribe(()=>{
			console.log( "closed" );
		})
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - openComponent
	**-------------------------------------------------------------------------------------
	*/
	public openComponent( vent: Event ): void{
		this.comService.modal( ModalTestComponent, { width: "500px" } ).subscribe(( resp )=>{
			console.log( resp );
		})
	}	
}
