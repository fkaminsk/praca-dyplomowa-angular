import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {PageContentComponent} from './page-content/page-content.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthInterceptor, AuthService} from './services/auth.service';
import {NavCategoriesComponent} from './nav-bar/nav-categories/nav-categories.component';
import {ProductsComponent} from './products/products.component';
import {JwPaginationModule} from 'jw-angular-pagination';
import {SingleProductComponent} from './products/single-product/single-product.component';
import {CreateProductComponent} from './products/create-product/create-product.component';
import {ImageUploadComponent} from './products/image-upload/image-upload.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageContentComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NavCategoriesComponent,
    ProductsComponent,
    SingleProductComponent,
    CreateProductComponent,
    ImageUploadComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwPaginationModule,
    NgbModule,
  ],
  providers: [AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
