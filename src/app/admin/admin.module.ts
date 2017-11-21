import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminrootComponent } from './adminroot/adminroot.component';
import { AdminwelcomeComponent } from './adminwelcome/adminwelcome.component';
import { AdminaboutComponent } from './adminabout/adminabout.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminrootComponent, AdminwelcomeComponent, AdminaboutComponent]
})
export class AdminModule { }
