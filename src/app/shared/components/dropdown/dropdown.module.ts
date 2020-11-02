import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownComponent} from './dropdown.component';
import {TextFilterPipe} from './dropdownfilter.pipe';
import {FormsModule} from '@angular/forms';
import {CheckboxComponent} from './shared/components/checkbox/checkbox.component';
import {DropdownService} from './shared/services/dropdown.service';
import {InfiniteScrollModule} from '@thisissoon/angular-infinite-scroll';


@NgModule({
    declarations: [DropdownComponent, TextFilterPipe, CheckboxComponent],
    imports: [
        CommonModule,
        FormsModule,

        // Libraries
        InfiniteScrollModule,
    ],
    exports: [DropdownComponent, TextFilterPipe, CheckboxComponent],
    providers: [DropdownService]
})
export class DropdownModule {
}
