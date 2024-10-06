import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { loadStripe, Stripe, StripeElements, StripePaymentElement } from '@stripe/stripe-js';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/modules/auth/models/user.model';
import { Basket } from 'src/app/modules/shop/models/basket.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  private http = inject(HttpClient);
  private stripePromise: Promise<Stripe | null>;
  private elements?: StripeElements;
  private paymentElement?: StripePaymentElement;
  basket?: Basket;

  constructor() {
    this.stripePromise = loadStripe(environment.stripeKey);
  }

  getStripeInstance() {
    return this.stripePromise;
  }

  async initializeElements() {
    if (!this.elements) {
      const stripe = await this.getStripeInstance();
      const basket = this.createOrUpdatePaymentIntent();
      if (stripe) {
          this.elements = stripe.elements({
            // clientSecret: "",
            locale: "it-IT",
            mode: "subscription",
            amount: 50,
            currency: "eur",
            appearance: {
              labels: "floating"
            }
          })
      } else {
        throw new Error("Stripe has not been loaded")
      }
    }
    return this.elements;
  }

  async createPaymentElement() {
    if (!this.paymentElement) {
      const ELEMENTS = await this.initializeElements();
      console.log("Elements", ELEMENTS);
      if (ELEMENTS) {
        this.paymentElement = ELEMENTS.create('payment');
      } else {
        throw new Error('Elements instance has not been initialized');
      }
    }
    return this.paymentElement;
  }

  createCustomer(): Observable<string> {
    const USER_PROFILE = localStorage.getItem('user');
    if (USER_PROFILE) {
      const USER: User = JSON.parse(USER_PROFILE);
      const headers = { 'Authorization': `Bearer ${USER.token}` };
      return this.http.post<string>(`${environment.apiUrl}/Stripe/create-customer`, null, {headers: headers});
    } else {
      throw new Error();
    }
  }

  createOrUpdatePaymentIntent() {
    const BASKET_ID = localStorage.getItem('basket_id');
    if (!BASKET_ID) throw new Error('Problem with Cart');
    const USER_PROFILE = localStorage.getItem('user');
    if (!USER_PROFILE) throw new Error('Not Authenticated User');
    const USER: User = JSON.parse(USER_PROFILE);
    const headers = { 'Authorization': `Bearer ${USER.token}` };
    return this.http.post<Basket>(`${environment.apiUrl}/Stripe/payment?basketId=${BASKET_ID}`, null, {headers: headers}).subscribe(res => {
      return res.stripeToken;
    })
  }

  disposeElements() {
    this.elements = undefined;
    this.paymentElement = undefined;
  }
}
