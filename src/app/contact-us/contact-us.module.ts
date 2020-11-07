import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import {HeaderModule} from "../shared/components/header/header.module";
import {FooterModule} from "../shared/components/footer/footer.module";


@NgModule({
  declarations: [ContactUsComponent],
    imports: [
        CommonModule,
        ContactUsRoutingModule,
        HeaderModule,
        FooterModule
    ]
})
export class ContactUsModule { }
