//Vendor
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'jtmgio-form-fields',
	template: `
		<div class="container">
			<p>Input Text Field</p>
			<mat-form-field floatPlaceholder="never">
				<input matInput placeholder="Input">
			</mat-form-field>

			<p>Input Textarea Field</p>
			<mat-form-field class="jtmgio-textarea"  floatPlaceholder="never">
				<textarea matInput placeholder="Textarea"></textarea>
			</mat-form-field>

			<p>Input Select Field</p>
			<mat-form-field  floatPlaceholder="never">
				<mat-select placeholder="Select">
					<mat-option value="option">Option</mat-option>
					<mat-option value="option">Option</mat-option>
					<mat-option value="option">Option</mat-option>
					<mat-option value="option">Option</mat-option>
					<mat-option value="option">Option</mat-option>
					<mat-option value="option">Option</mat-option>
				</mat-select>
			</mat-form-field>
			<p>Input Radios</p>
			<mat-radio-group class="mat-radio-list">
				<mat-radio-button  *ngFor="let item of options">
					{{item}}
				</mat-radio-button>
			</mat-radio-group>
			
			<p>Input Checkboxes</p>
			<div class="mat-checkbox-list">
				<mat-checkbox>Checked</mat-checkbox>
				<mat-checkbox>Indeterminate</mat-checkbox>
			</div>

			<p>Input Date Picker</p>
			<mat-form-field>
				<input matInput [matDatepicker]="picker" placeholder="Choose a date">
				<mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
				<mat-datepicker #picker startView="year" [startAt]="startDate"></mat-datepicker>
		  </mat-form-field>					  
		</div>

	`,
	styles: [ `	


		.container {
			display: flex;
			flex-direction: column;
		}
		.container > p{
			margin-bottom:5px;
		}
		.container > mat-form-field, .container > mat-radio-group, .container .mat-checkbox-list  {
			width: 50%;
			margin:0px 0 30px 0;
		}

	  
	`],
	providers: []
})

export class FormFieldsComponent implements OnInit {
	
	options = [
	  'Option 1',
	  'Option 2',
	  'Option 3',
	  'Option 4',
	];
	  
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - constructor
	**-------------------------------------------------------------------------------------
	*/	
	constructor(
	) {}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - ngOnInit
	**-------------------------------------------------------------------------------------
	*/
	ngOnInit() {
	}	

}
