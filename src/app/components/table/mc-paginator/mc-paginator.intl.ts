import { MatPaginatorIntl } from '@angular/material';

export class jtmgioCustomPaginatorIntl extends MatPaginatorIntl{
	constructor(){
		super();
		this.itemsPerPageLabel = "per page";
	}
}
