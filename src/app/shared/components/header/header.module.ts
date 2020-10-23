import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {ServicesModule} from "../../services/services.module";


@NgModule({
    declarations: [HeaderComponent],
    imports: [
        CommonModule,
        ServicesModule
    ],
    exports: [HeaderComponent],

})
export class HeaderModule {
}
