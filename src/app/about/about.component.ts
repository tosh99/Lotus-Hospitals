import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./styles/about.component.scss']
})
export class AboutComponent implements OnInit {

    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('14 Years of Excellence in Healthcare ');
        this.meta.updateTag({name: 'description', content: 'Lotus Hospitals is here to provide quality care for' +
                ' all seeking medical attention concerning pediatrics, neonatology, gynecology, maternity and fertility'});
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }

}
