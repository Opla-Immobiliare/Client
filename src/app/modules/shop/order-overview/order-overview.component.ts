import { Component, inject, OnInit } from '@angular/core';
import { StripePaymentElement } from '@stripe/stripe-js';
import { StripeService } from 'src/app/core/services/stripe.service';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.scss']
})

export class OrderOverviewComponent implements OnInit {
  private stripeService = inject(StripeService);
  paymentElement?: StripePaymentElement;

  async ngOnInit() {
    try {
      this.paymentElement = await this.stripeService.createPaymentElement();
      this.paymentElement.mount('#payment-element');
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
