import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdditionalBlogsComponent} from './additional-blogs.component';
import {SharedServicesModule} from "../../shared-services.module";


@NgModule({
    declarations: [AdditionalBlogsComponent],
    exports: [
        AdditionalBlogsComponent
    ],
    imports: [
        CommonModule,
        SharedServicesModule
    ]
})
export class AdditionalBlogsModule {
}
