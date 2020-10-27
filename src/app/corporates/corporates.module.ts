import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporatesRoutingModule } from './corporates-routing.module';
import { CorporatesComponent } from './corporates.component';
import {HeaderModule} from "../shared/components/header/header.module";
import {FooterModule} from "../shared/components/footer/footer.module";


@NgModule({
  declarations: [CorporatesComponent],
    imports: [
        CommonModule,
        CorporatesRoutingModule,
        HeaderModule,
        FooterModule
    ]
})
export class CorporatesModule { }
