import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'jtmgio-selects',
    templateUrl: './selects.component.html',
})
export class SelectsComponent implements OnInit {
    //the list a select takes is an array of objects.
    //each object is an ID and a Label. These are similar to the 'value' and 'innerText' on a vanilla <option>
    list = [{
        id: 1,
        label: "name"
    }, {
        id: 2,
        label: "other name"
    }, {
        id: 3,
        label: "third name"
    }, {
        id: 4,
        label: "fourth name"
    }, {
        id: 5,
        label: "plead the"
    }, {
        id: 6,
        label: "six"
    }, {
        id: 7,
        label: "heaven"
    }];

    //Form controls can be passed into the select to manage the data. Pass in the default value. (either a single value or array of values that correspond to the id)
    formControl = new FormControl(1);
    formControl2 = new FormControl([]);
    formControl3 = new FormControl([1, 5]);

    //Examples of different display Functions. This allows you to determin what is displayed in the base input.
    get displayFn() {
        return (val) => {
            let field = this.list.find((item) => item.id == val);
            return field ? field.label : val;
        };
    }

    get displayMultipleFn() {
        return (val) => {
            const field = this.list.
                filter((item) => val.find((innerVal) => innerVal === item.id)).
                reduce((prev, current) => prev ? prev + ',' + current.label : current.label, '');
            return field;
        };
    }

    displayString() {
        return "Names";
    }

    ngOnInit() {
        //This is how you access the data if you used a FormControl
        this.formControl.valueChanges.subscribe((e) => {
            console.log('Single Select Value: ', e);
        });
        this.formControl2.valueChanges.subscribe((e) => {
            console.log('Multi Select Values: ', e);
        });
        this.formControl3.valueChanges.subscribe((e) => {
            console.log('Second Multi Select Values: ', e);
        });

        //setValue on the FormControl is used to programatically set what is selected
        setTimeout(() => {
            this.formControl.setValue(3);
            this.formControl2.setValue([2, 4]);
            this.formControl3.setValue([4]);
        }, 5000);
    }
}
