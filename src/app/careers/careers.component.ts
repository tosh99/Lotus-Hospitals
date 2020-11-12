import {Component, OnInit} from '@angular/core';
import {DropdownConfigModel} from '../shared/components/dropdown/shared/models/dropdown.model';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-careers',
    templateUrl: './careers.component.html',
    styleUrls: ['./styles/careers.component.scss']
})
export class CareersComponent implements OnInit {
    locations = ['Doctor', 'Nurse'];
    dpLocation = new DropdownConfigModel();

    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Be the best Healthcare Provider at Lotus Hospitals');
        this.meta.updateTag({
            name: 'description', content: 'To work in one of the best Hospitals, ' +
                'send in your résumé to hr@lotuhospitals.in or fill out the Career Form on our website. '
        });
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
        this.dpLocation.dropdown_placeholder = 'Position';

        const tempStyle = {
            'background-color': '#E8E7F4'
        };

        this.dpLocation.dropdown_button_style = tempStyle;
    }

}
