import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, filter, first, tap } from "rxjs";
import { PlanEntityService } from "./plan-entity.service";

@Injectable()
export class PlansResolver implements Resolve<boolean> {

    constructor(private planService: PlanEntityService) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {

        return this.planService.loaded$
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                        this.planService.getAll();
                    }
                }),
                filter(loaded => !!loaded),
                first()
            );
    }
}