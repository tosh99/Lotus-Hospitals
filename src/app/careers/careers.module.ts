import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';
import {HeaderModule} from "../shared/components/header/header.module";
import {FooterModule} from "../shared/components/footer/footer.module";
import {DropdownModule} from "../shared/components/dropdown/dropdown.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [CareersComponent],
    imports: [
        CommonModule,
        CareersRoutingModule,
        HeaderModule,
        FooterModule,
        DropdownModule,
        FormsModule
    ]
})
export class CareersModule { }
