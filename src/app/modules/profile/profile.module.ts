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
import { UpdateUserFormComponent } from './personal-settings/update-user-form/update-user-form.component';
import { UpdatePasswordFormComponent } from './personal-settings/update-password-form/update-password-form.component';
import { AdditionalSettingsComponent } from './personal-settings/additional-settings/additional-settings.component';
import { DeleteAccountComponent } from './personal-settings/additional-settings/delete-account/delete-account.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { PlanCardComponent } from './subscriptions/plan-card/plan-card.component';
import { PaymentMethodCardComponent } from './subscriptions/payment-method-card/payment-method-card.component';
import { TransactionsCardComponent } from './subscriptions/transactions-card/transactions-card.component';
import { ManageComponent } from './subscriptions/manage/manage.component';
import { NewPaymentMethodComponent } from './subscriptions/new-payment-method/new-payment-method.component';

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
  },
  {
    path: 'subscriptions',
    component: SubscriptionsComponent
  },
  {
    path: 'subscriptions/manage',
    component: ManageComponent
  },
  {
    path: 'subscriptions/manage/add-payment-method',
    component: NewPaymentMethodComponent
  }
]

@NgModule({
  declarations: [
    CompleteProfileComponent,
    ProfileComponent,
    PersonalSettingsComponent,
    SavedAdsComponent,
    AdsComponent,
    UpdateUserFormComponent,
    UpdatePasswordFormComponent,
    AdditionalSettingsComponent,
    DeleteAccountComponent,
    SubscriptionsComponent,
    PlanCardComponent,
    PaymentMethodCardComponent,
    TransactionsCardComponent,
    ManageComponent,
    NewPaymentMethodComponent,

  ],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ]
})

export class ProfileModule { }
