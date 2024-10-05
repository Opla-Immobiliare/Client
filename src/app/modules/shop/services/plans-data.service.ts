import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Plan } from "../models/plan.model";

@Injectable()
export class PlansDataService extends DefaultDataService<Plan> {


    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Plan', http, httpUrlGenerator);


    }

    override getAll(): Observable<Plan[]> {
        return this.http.get<Plan[]>(`${environment.apiUrl}/Plans`);
    }
}