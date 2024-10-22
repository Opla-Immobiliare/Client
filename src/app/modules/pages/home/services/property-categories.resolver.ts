import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { filter, first, Observable, tap } from "rxjs";
import { PropertyCategoriesEntityService } from "./property-categories-entity.service";

@Injectable()
export class PropertyCategoriesResolver implements Resolve<boolean> {

    constructor(private propertyTypeService: PropertyCategoriesEntityService) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {

        return this.propertyTypeService.loaded$
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                        this.propertyTypeService.getAll();
                    }
                }),
                filter(loaded => !!loaded),
                first()
            );
    }
}