import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StripeService } from 'src/app/core/services/stripe.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit{
  private route = inject(ActivatedRoute);
  private stripeService = inject(StripeService);

  setup_intent_client_secret = "";

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.setup_intent_client_secret = params['setup_intent_client_secret'];
      console.log(this.setup_intent_client_secret); // Print the parameter to the console. 
    });
  }

  ngOnInit(): void {

    // setup_intent=seti_1Q7GFNKwisbqZZhJLRVxcxPS&setup_intent_client_secret=seti_1Q7GFNKwisbqZZhJLRVxcxPS_secret_QzEiLlrOgoQuFachbgT6m5Eia6wYLcv&redirect_status=succeeded
    // seti_1Q7GFNKwisbqZZhJLRVxcxPS_secret_QzEiLlrOgoQuFachbgT6m5Eia6wYLcv
    // const setup_intent_client_secret = this.route.snapshot.paramMap.get('setup_intent_client_secret');

    // console.log("ClientSecret", setup_intent_client_secret);
    
    if (this.setup_intent_client_secret) {
      this.stripeService.successPayment(this.setup_intent_client_secret);
    }
    
  }
}
