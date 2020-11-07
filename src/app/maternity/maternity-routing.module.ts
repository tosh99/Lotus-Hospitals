import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MaternityComponent} from "./maternity.component";

const routes: Routes = [
    {
        path: '',
        component: MaternityComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MaternityRoutingModule {
}
