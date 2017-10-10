import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AnimationsAllComponent } from './animations-all/animations-all.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'animations-all', component: AnimationsAllComponent },
    {
        path: 'products',
        component: ProductsComponent,
        children: [
            { path: 'add', component: ProductEditComponent },
            { path: 'edit/:id', component: ProductEditComponent }
        ]
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent, ProductsComponent, ProductEditComponent];
