import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaediatricsRoutingModule } from './paediatrics-routing.module';
import { PaediatricsComponent } from './paediatrics.component';
import {HeaderModule} from "../shared/components/header/header.module";
import {FooterModule} from "../shared/components/footer/footer.module";


@NgModule({
  declarations: [PaediatricsComponent],
    imports: [
        CommonModule,
        PaediatricsRoutingModule,
        HeaderModule,
        FooterModule
    ]
})
export class PaediatricsModule { }
