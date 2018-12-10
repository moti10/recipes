import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { PiEditComponent } from './pi-edit/pi-edit.component';
import { PiDetailComponent } from './pi-detail/pi-detail.component';
// import { RecipeStartComponent } from './pi-start/pi-start.component';
import { PiComponent } from './pi.component';
import { PiListComponent } from './pi-list/pi-list.component';

const personalInformationRoutes: Routes = [
  { path: '',  children: [
    { path: '', component: PiListComponent },
    { path: 'new', component: PiEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: PiDetailComponent, canActivate: [AuthGuard] },
    { path: ':id/edit', component: PiEditComponent, canActivate: [AuthGuard] },
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(personalInformationRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class PiRoutingModule {}
