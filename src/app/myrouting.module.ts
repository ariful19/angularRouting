import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: 'app/user/user.module#UserModule' },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class MyRoutingModule { }