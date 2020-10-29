import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppState} from './services/app-state';
import {AppUtils} from './services/app-utils';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [],
    providers: [AppState, AppUtils]
})
export class SharedServicesModule {
}
