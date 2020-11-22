import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlogRoutingModule} from './blog-routing.module';
import {BlogFirstComponent} from './blog-first/blog-first.component';
import {FooterModule} from '../shared/components/footer/footer.module';
import {HeaderModule} from '../shared/components/header/header.module';
import {BlogComponent} from './blog/blog.component';
import {DropdownModule} from '../shared/components/dropdown/dropdown.module';
import {SharedServicesModule} from '../shared/shared-services.module';
import {AdditionalBlogsModule} from '../shared/components/additional-blogs/additional-blogs.module';
import {GoBackModule} from '../shared/components/go-back/go-back.module';


@NgModule({
    declarations: [BlogFirstComponent, BlogComponent],
    imports: [
        CommonModule,
        BlogRoutingModule,
        FooterModule,
        HeaderModule,
        DropdownModule,
        SharedServicesModule,
        AdditionalBlogsModule,
        GoBackModule,
        SharedServicesModule
    ]
})
export class BlogModule {
}
