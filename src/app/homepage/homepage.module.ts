import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import {HomepageComponent} from "./homepage.component";
import {HeaderModule} from "../shared/components/header/header.module";
import {FooterModule} from "../shared/components/footer/footer.module";


@NgModule({
  declarations: [HomepageComponent],
    imports: [
        CommonModule,
        HomepageRoutingModule,
        HeaderModule,
        FooterModule
    ]
})
export class HomepageModule { }
