import { Component, OnInit, ViewChild } from '@angular/core';

import { StripeService, StripeCardComponent, injectStripe } from 'ngx-stripe';
import {
  Stripe,
  StripeCardElementOptions,
  StripeElementsOptions,
  StripePaymentElementOptions,
} from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-stripe',
  templateUrl: './test-stripe.component.html',
  styleUrls: ['./test-stripe.component.scss']
})
export class TestStripeComponent implements OnInit {

  stripe = injectStripe(environment.stripeKey);

  @ViewChild(StripeCardComponent) card: StripeCardComponent | any;

  paymentElementOptions: StripePaymentElementOptions = {
    layout: {
      type: 'tabs',
      defaultCollapsed: false,
      radios: false,
      spacedAccordionItems: false
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'it',
    appearance: {
      theme: 'flat'
    },
    clientSecret: environment.stripeKeySecret
  };

  constructor() {}

  ngOnInit(): void {}
}
