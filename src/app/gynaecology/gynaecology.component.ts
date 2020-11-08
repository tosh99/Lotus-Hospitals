import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-gynaecology',
    templateUrl: './gynaecology.component.html',
    styleUrls: ['./styles/gynaecology.component.scss']
})
export class GynaecologyComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }

}
