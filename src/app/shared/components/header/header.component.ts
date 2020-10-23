import {Component, OnInit} from '@angular/core';
import {WindowScrolling} from '../../services/scrolling';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./styles/header.component.scss']
})
export class HeaderComponent implements OnInit {
    viewMenu = false;
    windowScrolling: WindowScrolling;

    constructor(windowScrolling: WindowScrolling) {
        this.windowScrolling = windowScrolling;
    }

    ngOnInit(): void {
    }

    toggleModal(): void {
        window.scrollTo(0, 0);
        this.viewMenu = !this.viewMenu;

        if (this.viewMenu) {
            this.windowScrolling.disable();

        } else {
            this.windowScrolling.enable();

        }
    }
}
