import { RolesComponent } from './roles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperComponent } from './developer/developer.component';
import { HrComponent } from './hr/hr.component';
import { BrowserModule } from '@angular/platform-browser';
const routes: Routes = [{path:'roles',component:RolesComponent,children:[{path:'developer',component:DeveloperComponent},
{path:'hr',component:HrComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
