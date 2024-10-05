import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PlanCart } from "../models/plan-cart.model";

@Injectable({
    providedIn: 'root'
})
export class PlanService {

    public planCart: BehaviorSubject<PlanCart | null> = new BehaviorSubject<PlanCart | null>(null);
    planCartSource = this.planCart.asObservable();

    setPlanCart(obj: PlanCart): void {
        console.log("SetPlan", obj)
        this.planCart.next(obj);
    }
}