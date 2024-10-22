import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Comune } from "src/app/modules/properties/add-property/models/comune.model";
import { environment } from "src/environments/environment";
import { CittaEComune } from "../models/cittaEComune.model";

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    private http = inject(HttpClient);

    getComune(val: string): Observable<CittaEComune[]> {
        return this.http.get<CittaEComune[]>(`${environment.apiUrl}/Province/Citta?citta=${val}`);
    }
}