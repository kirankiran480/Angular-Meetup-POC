import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DetailsCardComponent } from './details-card/details-card.component';
import { GitthubApiService } from './gitthub-api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromUserState from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './users.effects';
import { HttpClientModule } from '@angular/common/http';

export const userRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent, HeaderComponent, DetailsCardComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(userRoutes),
    ReactiveFormsModule,
    StoreModule.forFeature(fromUserState.userStateFeatureKey, fromUserState.reducers, { metaReducers: fromUserState.metaReducers }),
    EffectsModule.forFeature([UsersEffects])
  ],
  exports: [
    HomeComponent
  ],
  providers: [GitthubApiService]
})
export class UsersModule { }
