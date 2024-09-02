import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';
import { ProfileComponent } from './profile.component';
import { PersonalSettingsComponent } from './personal-settings/personal-settings.component';
import { RouterModule, Routes } from '@angular/router';
import { IconsModule } from 'src/app/shared/icons/icons.module';

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

  ],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }
