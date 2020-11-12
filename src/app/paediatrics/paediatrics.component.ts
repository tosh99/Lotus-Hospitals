import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-paediatrics',
    templateUrl: './paediatrics.component.html',
    styleUrls: ['./styles/paediatrics.component.scss']
})
export class PaediatricsComponent implements OnInit {

    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Pioneers in Emergency & Intensive Care for Children');
        this.meta.updateTag({name: 'description', content: 'Dr. V.S.V. Prasad is the best pediatrician in the country and is the founder & CEO of Lotus Hospitals'});
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }

}
