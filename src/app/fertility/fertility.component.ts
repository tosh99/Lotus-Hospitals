import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-fertility',
    templateUrl: './fertility.component.html',
    styleUrls: ['./styles/fertility.component.scss']
})
export class FertilityComponent implements OnInit {

          constructor(private title: Title, private meta: Meta) {
            this.title.setTitle('Fertility treatment and counselling at Lotus Hospitals');
            this.meta.updateTag({
                name: 'description',
                content: 'We offer ICSI, IUI and IVF treatments which are all tailored to your needs after a ' +
                    'thorough follicular study and androgen & semen analysis.'
            });
        }

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }

}
