import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
    },
    {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
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
        path: 'neonatology',
        loadChildren: () => import('./neonatology/neonatology.module').then(m => m.NeonatologyModule)
    },
    {
        path: 'maternity',
        loadChildren: () => import('./maternity/maternity.module').then(m => m.MaternityModule)
    },
    {
        path: 'fertility',
        loadChildren: () => import('./fertility/fertility.module').then(m => m.FertilityModule)
    },
    {
        path: 'gynaecology',
        loadChildren: () => import('./gynaecology/gynaecology.module').then(m => m.GynaecologyModule)
    },
    {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
    },
    {
        path: 'packages',
        loadChildren: () => import('./packages/packages.module').then(m => m.PackagesModule)
    },
    {
        path: 'contactus',
        loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
