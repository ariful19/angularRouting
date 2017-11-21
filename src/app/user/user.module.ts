import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserwelcomeComponent } from './userwelcome/userwelcome.component';
import { UseraboutComponent } from './userabout/userabout.component';
import { UserrootComponent } from './userroot/userroot.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UserwelcomeComponent, UseraboutComponent, UserrootComponent]
})
export class UserModule { }
