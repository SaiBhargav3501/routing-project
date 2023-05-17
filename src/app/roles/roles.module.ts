import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DeveloperComponent } from './developer/developer.component';
import { HrComponent } from './hr/hr.component';



@NgModule({
  declarations: [
    DeveloperComponent,
    HrComponent,
   
  ],
  imports: [
    CommonModule,
    
  ]
})
export class RolesModule { }
