import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyRoutingModule } from './myrouting.module'
import { AdminModule } from './admin/admin.module'
import { UserModule } from './user/user.module'


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MyRoutingModule, AdminModule, UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
