import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BlogFirstComponent} from './blog-first/blog-first.component';
import {BlogComponent} from './blog/blog.component';

const routes: Routes = [
    {
        path: '',
        component: BlogComponent
    },
    {
        path: 'blog-first',
        component: BlogFirstComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule {
}
