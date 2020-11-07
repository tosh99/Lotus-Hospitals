import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-fertility',
    templateUrl: './fertility.component.html',
    styleUrls: ['./styles/fertility.component.scss']
})
export class FertilityComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }

}
