import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CorporatesComponent} from "./corporates.component";

const routes: Routes = [
    {
        path: '',
        component: CorporatesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CorporatesRoutingModule {
}
