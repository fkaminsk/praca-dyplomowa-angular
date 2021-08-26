import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PageContentComponent} from './page-content/page-content.component';
import {ProductsComponent} from './products/products.component';
import {SingleProductComponent} from './products/single-product/single-product.component';
import {CreateProductComponent} from './products/create-product/create-product.component';


const routes: Routes = [
  {path: '', component: PageContentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product/:id', component: SingleProductComponent},
  {path: 'product-create', component: CreateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
