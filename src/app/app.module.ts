import { HelpComponent } from './help-module/help.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModule } from './about/about.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { AboutRoutingModule } from './about/about-routing.module';
import { AboutCompComponent } from './about/about-comp.component';
import { HelpModuleRoutingModule } from './help-module/help-module-routing.module';
import { RolesComponent } from './roles/roles.component';
import { RolesRoutingModule } from './roles/roles-routing.module';
import { UserComponent } from './user/user.component';
import { UserRoutingModule } from './user/user-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HelpModuleModule } from './help-module/help-module.module';
import { RolesModule } from './roles/roles.module';
import { UserModule } from './user/user.module';
import { allPageGuard } from './app-guard.service';

const routes: Routes =[{path:'about',loadChildren:()=>import('./about/about.module').then(m=>(m.AboutModule))},
{path:'help',loadChildren:()=>import('./help-module/help-module.module').then(m=>(m.HelpModuleModule))},
{path:'roles',loadChildren:()=>import('./roles/roles.module').then(m=>(m.RolesModule)),canActivate:[allPageGuard]},
{path:'user',loadChildren:()=>import('./user/user.module').then(m=>(m.UserModule))}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutCompComponent,
    HelpComponent,
    RolesComponent,
    UserComponent,
    NotFoundComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

    AppRoutingModule,
    AboutModule,
    UserModule,
    HelpModuleModule,
    AboutRoutingModule,
    HelpModuleRoutingModule,
    RolesModule,
    RolesRoutingModule,UserRoutingModule
  

  ],
  providers: [allPageGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
