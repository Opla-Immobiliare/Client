import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans/plans.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderOverviewComponent } from './order-overview/order-overview.component';
import { RouterModule, Routes } from '@angular/router';
import { IconsModule } from 'src/app/shared/icons/icons.module';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { PlanEntityService } from './services/plan-entity.service';
import { PlansDataService } from './services/plans-data.service';
import { PlansResolver } from './services/plans.resolver';

const routes: Routes = [
  {
    path: 'plans',
    component: PlansComponent,
    resolve: {
      plan: PlansResolver
    }
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'order-overview',
    component: OrderOverviewComponent
  }
]

// Entity metadata
const entityMetadata: EntityMetadataMap = {
  Plan: {}
};

@NgModule({
  declarations: [
    PlansComponent,
    CartComponent,
    CheckoutComponent,
    OrderOverviewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IconsModule
  ],
  providers: [
    PlanEntityService,
    PlansDataService,
    PlansResolver
  ]
})
export class ShopModule { 

  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private plansService: PlansDataService
  ) {
    eds.registerMetadataMap(entityMetadata);
    entityDataService.registerService('Plan', plansService);
  }
}
