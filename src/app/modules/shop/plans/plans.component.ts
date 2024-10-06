import { Component, inject, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Plan } from '../models/plan.model';
import { PlanEntityService } from '../services/plan-entity.service';
import localeIt from '@angular/common/locales/it'
import { registerLocaleData } from '@angular/common';
import { PlanService } from '../services/plan.service';
import { Router } from '@angular/router';
import { PlanCart } from '../models/plan-cart.model';
import { BasketService } from '../services/basket.service';
import { Basket, BasketPlan } from '../models/basket.model';
registerLocaleData(localeIt, 'it');

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  private planService = inject(PlanEntityService);
  private planCartService = inject(PlanService);
  private route = inject(Router);
  private basketService = inject(BasketService);

  planMethod: string = "year";
  plans$: Observable<Plan[] | undefined> = new Observable<Plan[]>
  plansAnual$: Observable<Plan[] | undefined> = new Observable<Plan[]>;

  ngOnInit(): void {
    this.plansAnual$ = this.planService.entities$.pipe(
      map(
        plans => plans.filter(plan => plan.subscriptionType == 1)
      )
    );
    this.plans$ = this.planService.entities$.pipe(
      map(
        plans => plans.filter(plan => plan.subscriptionType == 0)
      )
    );
  }

  setPlan(plan: Plan): void {
    let obj: Basket = {
      id: "",
      plan: {
        planName: plan.planName,
        id: plan.id,
        pricePerMonth: plan.pricePerMonth
      },
    }
    this.basketService.setBasket(obj);
    this.route.navigateByUrl('/shop/cart');
  }
}
