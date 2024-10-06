import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { HttpClient } from "@angular/common/http";
import { HttpOptions, QueryParams } from "@ngrx/data/src/dataservices/interfaces";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { PropertyType } from "../models/propert-type.model";
import { PropertyCategory } from "../models/property-category.model";

@Injectable()
export class PropertyTypesDataService extends DefaultDataService<PropertyType> {
    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('PropertyType', http, httpUrlGenerator);
    }

    override getAll(): Observable<PropertyType[]> {
        return this.http.get<PropertyType[]>(`${environment.apiUrl}/PropertyTypes`);
    }

    getCategoriesByPropertyId(id: number): Observable<PropertyCategory[]> {
        return this.http.get<PropertyCategory[]>(`${environment.apiUrl}/PropertyTypes/${id}/PropertyCategories`);
    }
}