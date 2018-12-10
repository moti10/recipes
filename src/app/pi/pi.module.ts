import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PiComponent } from './pi.component';
import { PiListComponent } from './pi-list/pi-list.component';
import { PiEditComponent } from './pi-edit/pi-edit.component';
import { PiDetailComponent } from './pi-detail/pi-detail.component';
import { PiItemComponent } from './pi-list/pi-item/pi-item.component';
import { PiRoutingModule } from './pi-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PiReducer } from './store/pi.reducers';
import { PiEffects } from './store/pi.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PiComponent,
    PiListComponent,
    PiEditComponent,
    PiDetailComponent,
    PiItemComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // HttpClientModule,
    PiRoutingModule,
    SharedModule,
    StoreModule.forFeature('personalInformations', PiReducer),
    EffectsModule.forFeature([PiEffects])
  ],
  exports: [
    PiListComponent
  ]
})
export class PiModule {}
