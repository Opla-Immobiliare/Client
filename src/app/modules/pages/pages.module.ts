import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiesPolicyComponent } from './cookies-policy/cookies-policy.component';
import { IconsModule } from "../../shared/icons/icons.module";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusinessRegistrationComponent } from './business-registration/business-registration.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'terms-of-use',
    component: TermsOfUseComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'cookies-policy',
    component: CookiesPolicyComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'business',
    component: BusinessRegistrationComponent,
  }
]

@NgModule({
  declarations: [
    ContactComponent,
    TermsOfUseComponent,
    PrivacyPolicyComponent,
    CookiesPolicyComponent,
    HomeComponent,
    NotFoundComponent,
    BusinessRegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IconsModule,
    FormsModule,
    ReactiveFormsModule
]
})
export class PagesModule { }
