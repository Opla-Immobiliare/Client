import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';
import { ProfileComponent } from './profile.component';
import { PersonalSettingsComponent } from './personal-settings/personal-settings.component';
import { RouterModule, Routes } from '@angular/router';
import { IconsModule } from 'src/app/shared/icons/icons.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SavedAdsComponent } from './profile/saved-ads/saved-ads.component';
import { AdsComponent } from './profile/ads/ads.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: 'complete',
    component: CompleteProfileComponent
  },
  {
    path: 'settings',
    component: PersonalSettingsComponent
  }
]

@NgModule({
  declarations: [
    CompleteProfileComponent,
    ProfileComponent,
    PersonalSettingsComponent,
    SavedAdsComponent,
    AdsComponent,

  ],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProfileModule { }
