import { Component, inject, OnInit } from '@angular/core';
import { PlanEntityService } from '../services/plan-entity.service';
import { ActivatedRoute } from '@angular/router';
import { PlanCart } from '../models/plan-cart.model';
import { PlanService } from '../services/plan.service';
import { filter, map, Observable } from 'rxjs';
import { Plan } from '../models/plan.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  private planService = inject(PlanEntityService);
  private planCartService = inject(PlanService);
  private planCart: Observable<PlanCart | null> = new Observable<null>();
  plan$: Observable<Plan | undefined> = new Observable<Plan>;

  ngOnInit() {
    this.planCartService.planCartSource.pipe(
      res => this.planCart = res
    );

    let selectedPlan: any;
    this.planCart.subscribe(
      res => {
        selectedPlan = res;
        console.log(selectedPlan);
      }
    );

    this.plan$ = this.planService.entities$.pipe(
      map(
        plans => plans.find(
          plan => (plan.planName == selectedPlan.planName && plan.subscriptionType == selectedPlan.subscriptionType)
        )
      )
    )
  }
}
