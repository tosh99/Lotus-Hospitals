import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { EducationComponent } from './education.component';
import {FooterModule} from "../shared/components/footer/footer.module";
import {HeaderModule} from "../shared/components/header/header.module";


@NgModule({
  declarations: [EducationComponent],
    imports: [
        CommonModule,
        EducationRoutingModule,
        FooterModule,
        HeaderModule
    ]
})
export class EducationModule { }
