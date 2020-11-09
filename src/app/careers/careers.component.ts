import {Component, OnInit} from '@angular/core';
import {DropdownConfigModel} from "../shared/components/dropdown/shared/models/dropdown.model";

@Component({
    selector: 'app-careers',
    templateUrl: './careers.component.html',
    styleUrls: ['./styles/careers.component.scss']
})
export class CareersComponent implements OnInit {
    dpLocation = new DropdownConfigModel();

    constructor() {
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
        this.dpLocation.dropdown_placeholder = 'Location';

        const temp_style = {
            'background-color': '#E8E7F4'
        };

        this.dpLocation.dropdown_button_style = temp_style;
    }

}
