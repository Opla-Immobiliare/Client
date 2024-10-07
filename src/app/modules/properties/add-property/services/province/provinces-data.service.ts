import { Injectable } from "@angular/core";
import { Province } from "../../models/province.model";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Citta } from "../../models/citta.model";
import { Comune } from "../../models/comune.model";

@Injectable()
export class ProvincesDataService extends DefaultDataService<Province> {
    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Province', http, httpUrlGenerator);
    }

    override getAll(): Observable<Province[]> {
        return this.http.get<Province[]>(`${environment.apiUrl}/Province`);
    }

    getCitta(id: number): Observable<Citta[]> {
        return this.http.get<Citta[]>(`${environment.apiUrl}/Province/${id}/Citta`);
    }

    getComune(id: number): Observable<Comune[]> {
        return this.http.get<Comune[]>(`${environment.apiUrl}/Province/Citta/${id}/Comune`);
    }
}