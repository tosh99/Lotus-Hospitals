import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./styles/contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }

    viewOnMap(url): void {
        window.open(url);
    }

}
