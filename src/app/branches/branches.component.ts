import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-branches',
    templateUrl: './branches.component.html',
    styleUrls: ['./styles/branches.component.scss']
})
export class BranchesComponent implements OnInit {

    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Lotus Hospitals in Hyderabad & Vizag');
        this.meta.updateTag({
            name: 'description', content: 'We are here for you at all hours. Find us on Google Maps.' +
                ' Book an appointment online now or call on 040 - 4040 4455.'
        });
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }

    viewOnMap(url): void {
        window.open(url);
    }

}
