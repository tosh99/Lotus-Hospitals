import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./styles/homepage.component.scss']
})
export class HomepageComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }

}
