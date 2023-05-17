import { UserComponent } from './user.component';
import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CreateComponent } from './create/create.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';

const routes: Routes = [{path:"user",component:UserComponent,children:[{path:"create",component:CreateComponent},
{path:"login",component:UserLoginComponent},{path:"logout",component:UserLogoutComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
