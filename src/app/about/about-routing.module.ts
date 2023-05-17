import { AboutCompComponent } from './about-comp.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { PartnersComponent } from './partners/partners.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [{path:'about',component:AboutCompComponent,children:[{path:'clients',component:ClientsComponent},
{path:'partner',component:PartnersComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
