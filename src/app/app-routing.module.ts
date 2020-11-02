import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
    },
    {
        path: 'careers',
        loadChildren: () => import('./careers/careers.module').then(m => m.CareersModule)
    },
    {
        path: 'branches',
        loadChildren: () => import('./branches/branches.module').then(m => m.BranchesModule)
    },
    {
        path: 'corporates',
        loadChildren: () => import('./corporates/corporates.module').then(m => m.CorporatesModule)
    },
    {
        path: 'education',
        loadChildren: () => import('./education/education.module').then(m => m.EducationModule)
    },
    {
        path: 'doctors',
        loadChildren: () => import('./doctors/doctors.module').then(m => m.DoctorsModule)
    },
    {
        path: 'paediatrics',
        loadChildren: () => import('./paediatrics/paediatrics.module').then(m => m.PaediatricsModule)
    },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
