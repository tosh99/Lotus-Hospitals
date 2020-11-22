import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsComponent } from './doctors.component';
import {FooterModule} from '../shared/components/footer/footer.module';
import {HeaderModule} from '../shared/components/header/header.module';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from '../shared/components/dropdown/dropdown.module';
import {SharedServicesModule} from '../shared/shared-services.module';


@NgModule({
  declarations: [DoctorsComponent],
    imports: [
        CommonModule,
        DoctorsRoutingModule,
        FooterModule,
        HeaderModule,
        FormsModule,
        DropdownModule,
        SharedServicesModule
    ]
})
export class DoctorsModule { }
