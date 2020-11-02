import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-dp-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

    @Input() ischecked = false;
    @Input() isradio = false;

    constructor() {
    }

    ngOnInit() {
    }

}
