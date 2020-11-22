import {Component, OnInit} from '@angular/core';
import {AppUtils} from "../../services/app-utils";

@Component({
    selector: 'app-additional-blogs',
    templateUrl: './additional-blogs.component.html',
    styleUrls: ['./additional-blogs.component.scss']
})
export class AdditionalBlogsComponent implements OnInit {
    slideIndex = 1;
    blogs = [];


    constructor(private appUtils: AppUtils) {
    }

    ngOnInit(): void {
        this.appUtils.parseEnv('blogs').subscribe((resp) => {
            this.blogs = resp.blogs;
        }, (err) => {
        });
    }


    // Next/previous controls
    plusSlides(n): void {
        this.slideIndex += n;

        if (this.slideIndex > this.blogs.length / 3) {
            this.slideIndex = 1;
        } else if (this.slideIndex === 0) {
            this.slideIndex = this.blogs.length;
        }
    }

}
