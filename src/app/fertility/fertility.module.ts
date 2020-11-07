import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FertilityRoutingModule } from './fertility-routing.module';
import { FertilityComponent } from './fertility.component';
import {HeaderModule} from "../shared/components/header/header.module";
import {FooterModule} from "../shared/components/footer/footer.module";


@NgModule({
  declarations: [FertilityComponent],
    imports: [
        CommonModule,
        FertilityRoutingModule,
        HeaderModule,
        FooterModule
    ]
})
export class FertilityModule { }
