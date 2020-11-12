import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-gynaecology',
    templateUrl: './gynaecology.component.html',
    styleUrls: ['./styles/gynaecology.component.scss']
})
export class GynaecologyComponent implements OnInit {


    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Lotus Hospitals offers holistic care for women’s health');
        this.meta.updateTag({
            name: 'description',
            content: 'The department of Gynecology at Lotus Hospitals has been led and nurtured by' +
                ' Dr. V. Hemamalini Prasad and has some of the best practitioners in the field.'
        });
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }

}
