import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminrootComponent } from './adminroot/adminroot.component';
import { AdminwelcomeComponent } from './adminwelcome/adminwelcome.component';
import { AdminaboutComponent } from './adminabout/adminabout.component';

const routes: Routes = [{
  path: '',
  component: AdminrootComponent,
  children: [
    {
      path: '',
      component: AdminwelcomeComponent
    },
    {
      path: 'admin/about',
      component: AdminaboutComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
