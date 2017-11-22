import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminrootComponent } from './adminroot/adminroot.component';
import { AdminwelcomeComponent } from './adminwelcome/adminwelcome.component';
import { AdminaboutComponent } from './adminabout/adminabout.component';
import { GmapComponent } from './gmap/gmap.component';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    AdminRoutingModule
  ],
  declarations: [AdminrootComponent, AdminwelcomeComponent, AdminaboutComponent, GmapComponent]
})
export class AdminModule { }
