import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiesPolicyComponent } from './cookies-policy/cookies-policy.component';
import { IconsModule } from "../../shared/icons/icons.module";

export const routes: Routes = [
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
  }
]

@NgModule({
  declarations: [
    ContactComponent,
    TermsOfUseComponent,
    PrivacyPolicyComponent,
    CookiesPolicyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IconsModule
]
})
export class PagesModule { }
