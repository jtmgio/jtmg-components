import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { AbstractTableService } from "./components/table/public-api";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

/*
**-------------------------------------------------------------------------------------
** Client Table Usage
** DESC - 	
	In order to use the npm table, you must implement the abstractTableSercive 
**-------------------------------------------------------------------------------------
*/
@Injectable()
export class AppService implements AbstractTableService{
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - constructor
	**-------------------------------------------------------------------------------------
	*/
	constructor( private http: Http ) {}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - getGroups
	** DESC - This will get all groups from the server
	**-------------------------------------------------------------------------------------
	*/
	getList(): Observable<any[]>{
		return this.http.get( "" )
						.map( this.formatData )
						.catch( this.throwError );
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - formatData
	** DESC - this will catch all errors generically
	**-------------------------------------------------------------------------------------
	*/
	formatData( res: Response ){
		let body: any = res.json();
		return ( body || {} );
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - throwError
	** DESC - this will catch all errors generically
	**-------------------------------------------------------------------------------------
	*/
	throwError( error: Response | any ){
		return Observable.throw( error || "There was a serious error" );
	}
}
