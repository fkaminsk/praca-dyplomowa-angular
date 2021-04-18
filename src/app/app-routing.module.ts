import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PageContentComponent} from './page-content/page-content.component';
import {UserPanelComponent} from './login/user-panel/user-panel.component';


const routes: Routes = [
  {path: '', component: PageContentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user_panel', component: UserPanelComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
