import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {PageContentComponent} from './page-content/page-content.component';
import {FooterComponent} from './footer/footer.component';
import {RecComponent} from './rec/rec.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageContentComponent,
    FooterComponent,
    RecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
