
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';
import { HelpComponent } from './help.component';

const routes: Routes = [{path:'help',component:HelpComponent,children:[{path:'contact',component:ContactComponent},
{path:'support',component:SupportComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpModuleRoutingModule { }
