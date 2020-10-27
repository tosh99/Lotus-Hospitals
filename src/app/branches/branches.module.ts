import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchesRoutingModule } from './branches-routing.module';
import { BranchesComponent } from './branches.component';
import {HeaderModule} from "../shared/components/header/header.module";
import {FooterModule} from "../shared/components/footer/footer.module";


@NgModule({
  declarations: [BranchesComponent],
    imports: [
        CommonModule,
        BranchesRoutingModule,
        HeaderModule,
        FooterModule
    ]
})
export class BranchesModule { }
