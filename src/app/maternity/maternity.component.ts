import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-maternity',
    templateUrl: './maternity.component.html',
    styleUrls: ['./styles/maternity.component.scss']
})
export class MaternityComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }

}
