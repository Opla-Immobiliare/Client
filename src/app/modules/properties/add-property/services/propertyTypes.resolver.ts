import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { PropertyTypeEntityService } from "./property-type-entity.service";
import { filter, first, Observable, tap } from "rxjs";

@Injectable()
export class PropertyTypesResolver implements Resolve<boolean> {

    constructor(private propertyTypeService: PropertyTypeEntityService) { }

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