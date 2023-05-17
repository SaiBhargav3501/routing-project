import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { PartnersComponent } from './partners/partners.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ClientsComponent,
    PartnersComponent,
    
  ],
  imports: [
    CommonModule,
    
  ]
})
export class AboutModule { }
