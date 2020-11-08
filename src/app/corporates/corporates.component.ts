import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-corporates',
    templateUrl: './corporates.component.html',
    styleUrls: ['./styles/corporates.component.scss']
})
export class CorporatesComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }

}
