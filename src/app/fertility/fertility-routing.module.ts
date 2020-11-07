import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FertilityComponent} from "./fertility.component";

const routes: Routes = [
    {
        path: '',
        component: FertilityComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FertilityRoutingModule {
}
