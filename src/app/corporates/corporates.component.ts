import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-corporates',
    templateUrl: './corporates.component.html',
    styleUrls: ['./styles/corporates.component.scss']
})
export class CorporatesComponent implements OnInit {

    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Health Insurance at Lotus Hospitals');
        this.meta.updateTag({
            name: 'description', content: 'Your health insurance claims are insured at Lotus Hospitals with varied ' +
                'institutions. Both, private and government.'
        });
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }

}
