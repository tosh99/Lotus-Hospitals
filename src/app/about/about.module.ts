import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import {HeaderModule} from "../shared/components/header/header.module";
import {FooterModule} from "../shared/components/footer/footer.module";


@NgModule({
  declarations: [AboutComponent],
    imports: [
        CommonModule,
        AboutRoutingModule,
        HeaderModule,
        FooterModule
    ]
})
export class AboutModule { }
