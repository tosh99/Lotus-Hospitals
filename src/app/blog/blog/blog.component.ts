import {Component, OnInit} from '@angular/core';
import {DropdownConfigModel} from '../../shared/components/dropdown/shared/models/dropdown.model';
import {AppUtils} from '../../shared/services/app-utils';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./styles/blog.component.scss']
})
export class BlogComponent implements OnInit {
    blogtypes = [];
    selectedBlogType;
    dpConfig = new DropdownConfigModel();


    blogs = [];

    constructor(private appUtils: AppUtils) {
    }

    ngOnInit(): void {
        this.appUtils.parseEnv('blogs').subscribe((resp) => {
            for (const blog of resp.blogs) {
                if (blog.isdisplayed === true) {
                    this.blogs.push(blog);
                }
            }

            for (const blog of this.blogs) {
                if (this.blogtypes.indexOf(blog.blogType) < 0) {
                    this.blogtypes.push(blog.blogType);
                }
            }

        }, (err) => {
        });
    }

    search(): void {
        for (const blog of this.blogs) {
            blog.isdisplayed = true;

            console.log(this.selectedBlogType);
            if (this.selectedBlogType) {
                blog.isdisplayed = blog.blogType === this.selectedBlogType;
            }
        }

    }

}
