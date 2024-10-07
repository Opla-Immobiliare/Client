import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { loadStripe, Stripe, StripeElements, StripePaymentElement } from '@stripe/stripe-js';
import { User } from 'src/app/modules/auth/models/user.model';
import { Basket } from 'src/app/modules/shop/models/basket.model';
import { BasketService } from 'src/app/modules/shop/services/basket.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  private http = inject(HttpClient);
  private basketService = inject(BasketService);
  private stripe: Promise<Stripe | null>;
  private elements?: StripeElements;
  private paymentElement?: StripePaymentElement;
  basket?: Basket;

  constructor() {
    this.stripe = loadStripe(environment.stripeKey);
  }

  getStripeInstance() {
    return this.stripe;
  }

  async initializeElements() {
    if (!this.elements) {
      const stripe = await this.getStripeInstance();
      this.basket = await this.getCurrentBasketSource();
      if (stripe) {
        // console.log(basket);
          this.elements = stripe.elements({
            locale: "it-IT",
            mode: "subscription",
            amount: this.basket.plan.pricePerMonth,
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
      // console.log("Elements", ELEMENTS);
      if (ELEMENTS) {
        this.paymentElement = ELEMENTS.create('payment');
      } else {
        throw new Error('Elements instance has not been initialized');
      }
    }
    return this.paymentElement;
  }

  createCustomer() {
    const USER_PROFILE = localStorage.getItem('user');
    if (USER_PROFILE) {
      const USER: User = JSON.parse(USER_PROFILE);
      const headers = { 'Authorization': `Bearer ${USER.token}` };

      return new Promise((resolve, reject) => {
        this.http.post<string>(`${environment.apiUrl}/Stripe/create-customer`, null, {headers: headers}).subscribe(res => {
          resolve(res)
        })
      });
    } else {
      throw new Error();
    }
  }

  createOrUpdatePaymentIntent(): Promise<Basket> {
    const BASKET_ID = localStorage.getItem('basket_id');
    if (!BASKET_ID) throw new Error('Problem with Cart');
    const USER_PROFILE = localStorage.getItem('user');
    if (!USER_PROFILE) throw new Error('Not Authenticated User');
    const USER: User = JSON.parse(USER_PROFILE);
    const headers = { 'Authorization': `Bearer ${USER.token}` };
    
    return new Promise((resolve, reject) => {
      this.http.post<Basket>(`${environment.apiUrl}/Stripe/payment?basketId=${BASKET_ID}`, null, { headers: headers }).subscribe(
        res => {
          resolve(res);
        }
      )
    });
  }

  getCurrentBasketSource(): Promise<Basket> {
    const BASKET_ID = localStorage.getItem('basket_id');
    if (!BASKET_ID) throw new Error('Problem with Cart');
    return new Promise((resolve) => {
      this.basketService.getBasket(BASKET_ID);
      this.basketService.basketSource$.subscribe(res => {
        resolve(res!);
      })
    } )
  }

  async confirmPayment() {
    const stripe = await this.getStripeInstance();
    const customer = await this.createCustomer();
    // console.log("Customer", customer);
    const basket = await this.createOrUpdatePaymentIntent();
    if (stripe) {
      await this.elements?.submit();
      await stripe.confirmSetup({
        clientSecret: <string>basket!.stripeToken,
        elements: this.elements,
        confirmParams: {
          return_url: 'http://localhost:4200/shop/thank-you'
        },
      })
    }
  }

  successPayment(setUpIntent: string): void {
    const USER_PROFILE = localStorage.getItem('user');
    if (!USER_PROFILE) throw new Error('Not Authenticated User');
    const USER: User = JSON.parse(USER_PROFILE);
    const headers = { 'Authorization': `Bearer ${USER.token}` };
    const BASKET_ID = localStorage.getItem('basket_id');
    this.http.post(`${environment.apiUrl}/Stripe/success-payment?setUpIntent=${setUpIntent}&basketId=${BASKET_ID}`, null, {headers: headers}).subscribe(res => console.log(res));
  }

  disposeElements(setUpIntent: string,) {
    this.elements = undefined;
    this.paymentElement = undefined;
  }
}
