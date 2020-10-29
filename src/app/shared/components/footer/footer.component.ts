import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./styles/footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor(public router: Router) {
    }

    ngOnInit(): void {
    }

    navigateTo(link): void {
        this.router.navigateByUrl(link);
    }

}
