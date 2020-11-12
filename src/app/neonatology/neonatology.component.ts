import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-neonatology',
    templateUrl: './neonatology.component.html',
    styleUrls: ['./styles/neonatology.component.scss']
})
export class NeonatologyComponent implements OnInit {

    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('NICU at Lotus Hospitals is one of the biggest in the world');
        this.meta.updateTag({
            name: 'description',
            content: 'WIth a number of successful recoveries and restoration of critical ' +
                'health newborns, we have come to be known for our Neonatal Intensive Care Unit (NICU).\n'
        });
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }

}
