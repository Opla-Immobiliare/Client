import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { PropertyTypesWithCategories } from "../../pages/home/models/propertyTypesWithCategories.model";
import { environment } from "src/environments/environment";
import { ActiveCategoryModel } from "../models/active-category.model";

@Injectable({
    providedIn: 'root'
})
export class PropertyService {
    private http = inject(HttpClient);

    private enableInterestForm = new BehaviorSubject<boolean>(false);
    enableInterestFormSource = this.enableInterestForm.asObservable();

    changeInterestFormSource(val: boolean): void {
        this.enableInterestForm.next(val);
    }

    getTypesWithCategories(): Observable<PropertyTypesWithCategories[]> {
        return this.http.get<PropertyTypesWithCategories[]>(`${environment.apiUrl}/PropertyTypes/categories`);
    }

    getActiveCategories(cityId: number): Observable<ActiveCategoryModel> {
        return this.http.get<ActiveCategoryModel>(`${environment.apiUrl}/Province/ActiveCities?id=${cityId}`);
    }
}