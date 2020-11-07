import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-womens-package',
    templateUrl: './womens-package.component.html',
    styleUrls: ['./styles/womens-package.component.scss']
})
export class WomensPackageComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }

}
