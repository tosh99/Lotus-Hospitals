import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./styles/education.component.scss']
})
export class EducationComponent implements OnInit {

    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Nationally Recognised Training Programmes');
        this.meta.updateTag({
            name: 'description', content: 'Lotus Hospitals’ Training Programme is affiliated with the National Board of Examination.' +
                ' Learn from some of the best healthcare providers. '
        });
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }

    scroll(el: HTMLElement): void {
        el.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
}
