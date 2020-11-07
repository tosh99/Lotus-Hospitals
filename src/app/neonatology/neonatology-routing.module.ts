import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NeonatologyComponent} from "./neonatology.component";

const routes: Routes = [
    {
        path: '',
        component: NeonatologyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NeonatologyRoutingModule {
}
