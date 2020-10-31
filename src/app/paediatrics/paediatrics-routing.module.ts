import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PaediatricsComponent} from "./paediatrics.component";

const routes: Routes = [
    {
        path: '',
        component: PaediatricsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaediatricsRoutingModule {
}
