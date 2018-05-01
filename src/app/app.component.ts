import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, Inject } from '@angular/core';
import { AppService } from "./app.service";


@Component({
	selector: 'app-root',	
	template: `
		<a routerLink="/" style="margin:20px 0; font-size:20px;">Home</a><hr /><br />
		<router-outlet></router-outlet>
	`,
	providers: [ AppService ]
})

export class AppComponent implements OnInit{

	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - constructor
	**-------------------------------------------------------------------------------------
	*/	
	constructor( 
		private service: AppService
	) {}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - ngOnInit
	**-------------------------------------------------------------------------------------
	*/
	ngOnInit() {
	}	

}
