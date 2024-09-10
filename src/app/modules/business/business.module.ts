import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteBusinessProfileComponent } from './complete-business-profile/complete-business-profile.component';
import { ReviewBusinessDataComponent } from './complete-business-profile/review-business-data/review-business-data.component';
import { PlansComponent } from './plans/plans.component';
import { CartComponent } from './plans/cart/cart.component';
import { CheckoutComponent } from './plans/checkout/checkout.component';
import { OrderOverviewComponent } from './plans/order-overview/order-overview.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'complete-profile',
    component: CompleteBusinessProfileComponent
  }
]

@NgModule({
  declarations: [
    CompleteBusinessProfileComponent,
    ReviewBusinessDataComponent,
    PlansComponent,
    CartComponent,
    CheckoutComponent,
    OrderOverviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BusinessModule { }
