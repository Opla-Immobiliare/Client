import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from '../services/basket.service';
import { Basket } from '../models/basket.model';
import localeIt from '@angular/common/locales/it'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeIt, 'it');

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  private basketService = inject(BasketService);
  basket$: Observable<Basket | null> = new Observable<Basket>;

  ngOnInit() {
    const BASKET = localStorage.getItem('basket_id');

    if (BASKET) {
      this.basketService.getBasket(BASKET);
      this.basketService.basketSource$.pipe(res => this.basket$ = res);
    }
  }
}
