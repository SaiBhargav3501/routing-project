import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpModuleRoutingModule } from './help-module-routing.module';
import { SupportComponent } from './support/support.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help.component';


@NgModule({
  declarations: [
    SupportComponent,
    ContactComponent,

  ],
  imports: [
    CommonModule,
   
  ]
})
export class HelpModuleModule { }
