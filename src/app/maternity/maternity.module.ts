import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaternityRoutingModule } from './maternity-routing.module';
import { MaternityComponent } from './maternity.component';
import {FooterModule} from "../shared/components/footer/footer.module";
import {HeaderModule} from "../shared/components/header/header.module";


@NgModule({
  declarations: [MaternityComponent],
    imports: [
        CommonModule,
        MaternityRoutingModule,
        FooterModule,
        HeaderModule
    ]
})
export class MaternityModule { }
