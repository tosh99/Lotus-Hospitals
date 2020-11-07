import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PaediatricsPackageComponent} from "./paediatrics-package/paediatrics-package.component";
import {WomensPackageComponent} from "./womens-package/womens-package.component";

const routes: Routes = [
    {
        path: '',
        component: PaediatricsPackageComponent
    },
    {
        path: 'women',
        component: WomensPackageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PackagesRoutingModule {
}
