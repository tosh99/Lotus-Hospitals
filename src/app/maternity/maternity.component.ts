import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-maternity',
    templateUrl: './maternity.component.html',
    styleUrls: ['./styles/maternity.component.scss']
})
export class MaternityComponent implements OnInit {

    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Expert team of gynecologists led by Dr. V. Hemamalini Prasad');
        this.meta.updateTag({
            name: 'description',
            content: 'The department of Maternity at Lotus Hospitals has been nurtured by Dr.' +
                ' V. Hemamalini Prasad and has executed many successful deliveries of healthy babies.'
        });
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }

}
