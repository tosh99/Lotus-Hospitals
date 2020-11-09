import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';
import {HeaderModule} from "../shared/components/header/header.module";
import {FooterModule} from "../shared/components/footer/footer.module";
import {DropdownModule} from "../shared/components/dropdown/dropdown.module";


@NgModule({
  declarations: [CareersComponent],
    imports: [
        CommonModule,
        CareersRoutingModule,
        HeaderModule,
        FooterModule,
        DropdownModule
    ]
})
export class CareersModule { }
