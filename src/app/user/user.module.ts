import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLoginComponent } from './user-login/user-login.component';
import { CreateComponent } from './create/create.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';



@NgModule({
  declarations: [
    UserLoginComponent,
    CreateComponent,
    UserLogoutComponent,
   
  ],
  imports: [
    CommonModule,
    
  ]
})
export class UserModule { }
