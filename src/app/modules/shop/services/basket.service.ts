import { Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Basket } from "../models/basket.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class BasketService {
    private basketSource = new BehaviorSubject<Basket | null>(null);
    basketSource$ = this.basketSource.asObservable();
    basket = signal<Basket | null>(null);

    constructor(private http: HttpClient) {}

    getBasket(id: string) {
        return this.http.get<Basket>(`${environment.apiUrl}/Basket?id=${id}`).subscribe({
            next: basket => this.basketSource.next(basket)
        })
    }

    setBasket(basket: Basket) {
        const createdBasket = this.createBasket();
        basket.id = createdBasket.id;
        return this.http.post<Basket>(`${environment.apiUrl}/Basket`, basket).subscribe({
            next: basket => this.basketSource.next(basket)
        })
    }

    private createBasket(): Basket {
        const basket = new Basket();
        localStorage.setItem('basket_id', basket.id);
        return basket;
    }
}