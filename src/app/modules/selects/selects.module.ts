import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { SelectsComponent } from './selects.component';
import { SelectModule } from "../../components/select/index";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SelectsComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        SelectModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [SelectsComponent]
})
export class DemoSelectsModule { }
