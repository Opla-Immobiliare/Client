import { Component, inject, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Plan } from '../models/plan.model';
import { PlanEntityService } from '../services/plan-entity.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  private planService = inject(PlanEntityService);

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
}
