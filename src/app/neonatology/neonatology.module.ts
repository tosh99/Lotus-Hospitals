import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeonatologyRoutingModule } from './neonatology-routing.module';
import { NeonatologyComponent } from './neonatology.component';
import {FooterModule} from "../shared/components/footer/footer.module";
import {HeaderModule} from "../shared/components/header/header.module";


@NgModule({
  declarations: [NeonatologyComponent],
    imports: [
        CommonModule,
        NeonatologyRoutingModule,
        FooterModule,
        HeaderModule
    ]
})
export class NeonatologyModule { }
