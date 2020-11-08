import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GynaecologyComponent} from "./gynaecology.component";

const routes: Routes = [
    {
        path: '',
        component: GynaecologyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GynaecologyRoutingModule {
}
