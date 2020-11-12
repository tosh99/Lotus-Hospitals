import {Component, OnInit} from '@angular/core';
import {DropdownConfigModel} from "../shared/components/dropdown/shared/models/dropdown.model";

@Component({
    selector: 'app-careers',
    templateUrl: './careers.component.html',
    styleUrls: ['./styles/careers.component.scss']
})
export class CareersComponent implements OnInit {
    locations = ['Doctor', 'Nurse'];
    dpLocation = new DropdownConfigModel();

    constructor() {
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
        this.dpLocation.dropdown_placeholder = 'Position';

        const temp_style = {
            'background-color': '#E8E7F4'
        };

        this.dpLocation.dropdown_button_style = temp_style;
    }

}
