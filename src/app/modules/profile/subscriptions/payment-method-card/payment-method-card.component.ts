import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-method-card',
  templateUrl: './payment-method-card.component.html',
  styleUrls: ['./payment-method-card.component.scss']
})

export class PaymentMethodCardComponent implements OnInit {

  constructor() {}

  hasPaymentMethod(): boolean { return true; }

  isOnHold(): boolean { return true; }

  ngOnInit(): void {}
}
