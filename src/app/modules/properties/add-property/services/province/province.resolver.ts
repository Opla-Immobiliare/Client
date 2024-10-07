import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ProvinceEntityService } from "./province.entity.service";
import { filter, first, Observable, tap } from "rxjs";

@Injectable()
export class ProvinceResolver implements Resolve<boolean> {
    propertyTypeService: any;

    constructor(private provinceService: ProvinceEntityService) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {

        return this.provinceService.loaded$
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                        this.provinceService.getAll();
                    }
                }),
                filter(loaded => !!loaded),
                first()
            );
    }
}