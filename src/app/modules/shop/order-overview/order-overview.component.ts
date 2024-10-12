import { Component, inject, OnInit } from '@angular/core';
import { StripePaymentElement } from '@stripe/stripe-js';
import { StripeService } from 'src/app/core/services/stripe.service';
import { BasketService } from '../services/basket.service';
import { Basket } from '../models/basket.model';
import { Observable } from 'rxjs';
import localeIt from '@angular/common/locales/it'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeIt, 'it');

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.scss']
})

export class OrderOverviewComponent implements OnInit {
  private stripeService = inject(StripeService);
  paymentElement?: StripePaymentElement;
  private basketService = inject(BasketService);
  basket$: Observable<Basket | null> = new Observable<Basket>;
  loading: boolean = false;

  async ngOnInit() {
    try {
      this.paymentElement = await this.stripeService.createPaymentElement();
      this.paymentElement.mount('#payment-element');
    } catch (error: any) {
      console.log(error.message);
    }

    const BASKET = localStorage.getItem('basket_id');

    if (BASKET) {
      this.basketService.getBasket(BASKET);
      this.basketService.basketSource$.pipe(res => this.basket$ = res);
    }
  }

  async confirmPayment() {
    this.loading = true;
    await this.stripeService.confirmPayment();
  }
}
