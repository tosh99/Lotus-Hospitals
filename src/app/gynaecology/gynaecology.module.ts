import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GynaecologyRoutingModule } from './gynaecology-routing.module';
import { GynaecologyComponent } from './gynaecology.component';
import {HeaderModule} from "../shared/components/header/header.module";
import {FooterModule} from "../shared/components/footer/footer.module";


@NgModule({
  declarations: [GynaecologyComponent],
    imports: [
        CommonModule,
        GynaecologyRoutingModule,
        HeaderModule,
        FooterModule
    ]
})
export class GynaecologyModule { }
