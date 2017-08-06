import {Component, OnInit} from '@angular/core';

import {PaymentService} from "../../services/payment.service";

@Component({
  moduleId: module.id,
  selector: 'app-pricing',
  templateUrl: 'pricing.component.html'
})
export class PricingComponent implements OnInit {
  pricing:any=null;

  constructor(private paymentservice : PaymentService){ }

  ngOnInit() {
    this.paymentservice.getPricing().subscribe(pricing => {
      if(pricing){
        this.pricing = pricing;
      }
      console.log("the pricing object:");
      console.log(pricing);
    });
  }

}
