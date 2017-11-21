import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserrootComponent } from './userroot/userroot.component';
import { UserwelcomeComponent } from './userwelcome/userwelcome.component';
import { UseraboutComponent } from './userabout/userabout.component';

const routes: Routes = [
  {
    path: '',
    component: UserrootComponent,
    children: [
      {
        path: '',
        component: UserwelcomeComponent
      },
      {
        path: 'user/about',
        component: UseraboutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
