import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { PaediatricsPackageComponent } from './paediatrics-package/paediatrics-package.component';
import { WomensPackageComponent } from './womens-package/womens-package.component';
import {HeaderModule} from "../shared/components/header/header.module";
import {FooterModule} from "../shared/components/footer/footer.module";


@NgModule({
  declarations: [PaediatricsPackageComponent, WomensPackageComponent],
    imports: [
        CommonModule,
        PackagesRoutingModule,
        HeaderModule,
        FooterModule
    ]
})
export class PackagesModule { }
