import { Component, OnInit, Input, Output, EventEmitter,  ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

const debounceTime = 150;

@Component({
	selector: "jtmgio-table-header",
	template: `
		<mat-card-header>
			<ng-content select="[table-header]"></ng-content>
			<div class="header-field-container" *ngIf="showFilter">
				<mat-icon (click)="clearSaerch()" *ngIf="showCancel > 0">cancel</mat-icon>
				<input (keyup.esc)="clearSaerch()" (keyup)="keyUp( $event )" (keyup.enter)="search()" type="text" [formControl]="filter" [placeholder]="searchPlaceholder">
				<button class="jtmgio-raised-button" (click)="search()" mat-raised-button color="jtmgio-green" [disabled]="!filter.value">Search</button>		
			</div>	
		</mat-card-header>
	`,
	styleUrls: [ './jtmgio-table-header.scss' ],
	providers: []	
})

export class jtmgioTableHeader implements OnInit{ 
	public showFilter: boolean = false;
	public filter: FormControl; 
	public instantFilter: boolean = false;
	public showCancel: number = 0;

	//output event for when we filter
	//should bubble to extending component
	@Output() onChildFilterEvent: EventEmitter<string> = new EventEmitter<string>();

	//set/get hasFilter
	@Input()
	set hasFilter( show: boolean ){
		this.showFilter = show;
	}
	get hasFilter(): boolean{
		return this.showFilter;
	}
	//set/get filterOnKeyUp
	@Input()
	set filterOnKeyUp( doFilter: boolean ){
		this.instantFilter = doFilter;
	}
	get filterOnKeyUp(): boolean{
		return this.instantFilter;
	}

	@Input() searchPlaceholder: string = "";

	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - constructor
	**-------------------------------------------------------------------------------------
	*/	
	constructor(){}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - ngOnInit
	**-------------------------------------------------------------------------------------
	*/	
	ngOnInit(): void{
		this.filter = new FormControl();
		if( this.instantFilter ){
			this.filter.valueChanges.debounceTime( debounceTime ).distinctUntilChanged().subscribe(()=>{
				this.onChildFilterEvent.emit( this.filter.value );
			})	
		}
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - keyDown
	**-------------------------------------------------------------------------------------
	*/
	keyUp(){
		this.showCancel = this.filter.value.length;
		if( this.showCancel == 0 ){
			this.search();
		}
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - search
	**-------------------------------------------------------------------------------------
	*/	
	search(): void{
		this.onChildFilterEvent.emit( this.filter.value );
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - clearSaerch
	**-------------------------------------------------------------------------------------
	*/
	clearSaerch(){
		this.filter.setValue( "" );
		this.showCancel = 0;
		this.search();
	}
}