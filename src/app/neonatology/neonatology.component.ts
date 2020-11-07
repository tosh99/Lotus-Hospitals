import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-neonatology',
    templateUrl: './neonatology.component.html',
    styleUrls: ['./styles/neonatology.component.scss']
})
export class NeonatologyComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }

}
