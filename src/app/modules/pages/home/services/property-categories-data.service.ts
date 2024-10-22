import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { PropertyTypesWithCategories } from "../models/propertyTypesWithCategories.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpOptions } from "@ngrx/data/src/dataservices/interfaces";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class PropertyCategoriesDataService extends DefaultDataService<PropertyTypesWithCategories> {

    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('PropertyTypesWithCategories', http, httpUrlGenerator);
    }

    override getAll(options?: HttpOptions): Observable<PropertyTypesWithCategories[]> {
        return this.http.get<PropertyTypesWithCategories[]>(`${environment.apiUrl}/PropertyTypes/categories`)
    }
}
