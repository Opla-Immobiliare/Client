import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Property } from "../models/property.model";
import { HttpClient } from "@angular/common/http";
import { HttpOptions, QueryParams } from "@ngrx/data/src/dataservices/interfaces";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../../auth/models/user.model";

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

    addProperty(obj: Object): Observable<number> {
        const USER_PROFILE = localStorage.getItem('user');
        // console.log(USER_PROFILE);
        if (USER_PROFILE) {
            const USER: User = JSON.parse(USER_PROFILE);
            const headers = { 'Authorization': `Bearer ${USER.token}` };
            return this.http.post<number>(`${environment.apiUrl}/Property`, obj, {headers: headers});
        }
        else throw new Error(`Unauthorized`);
    }
}