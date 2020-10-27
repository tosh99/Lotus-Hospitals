import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsComponent } from './doctors.component';
import {FooterModule} from "../shared/components/footer/footer.module";
import {HeaderModule} from "../shared/components/header/header.module";


@NgModule({
  declarations: [DoctorsComponent],
    imports: [
        CommonModule,
        DoctorsRoutingModule,
        FooterModule,
        HeaderModule
    ]
})
export class DoctorsModule { }
