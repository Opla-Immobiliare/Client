import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Property } from "../models/property.model";
import { HttpClient } from "@angular/common/http";
import { HttpOptions, QueryParams } from "@ngrx/data/src/dataservices/interfaces";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class PropertiesDataService extends DefaultDataService<Property> {

    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Property', http, httpUrlGenerator);
    }

    override getAll(options?: HttpOptions): Observable<Property[]> {
        return this.http.get<Property[]>(`${environment.apiUrl}/Property`);
    }

    override getById(key: number | string, options?: HttpOptions): Observable<Property> {
        return this.http.get<Property>(`${environment.apiUrl}/Property/${key}`);
    }
}