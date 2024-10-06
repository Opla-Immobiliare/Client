import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from '../services/basket.service';
import { Basket } from '../models/basket.model';
import localeIt from '@angular/common/locales/it'
import { registerLocaleData } from '@angular/common';
import { StripeService } from 'src/app/core/services/stripe.service';
registerLocaleData(localeIt, 'it');

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  private basketService = inject(BasketService);
  private stripeService = inject(StripeService);
  basket$: Observable<Basket | null> = new Observable<Basket>;

  ngOnInit() {
    const BASKET = localStorage.getItem('basket_id');

    if (BASKET) {
      this.basketService.getBasket(BASKET);
      this.basketService.basketSource$.pipe(res => this.basket$ = res);
    }
  }
}
