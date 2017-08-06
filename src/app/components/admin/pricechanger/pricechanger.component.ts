import { Component, OnInit } from '@angular/core';
import { PaymentService} from "../../../services/payment.service";
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'app-pricechanger',
  templateUrl: './pricechanger.component.html',
  styleUrls: ['./pricechanger.component.css']
})
export class PricechangerComponent implements OnInit {

  pricing:any=null;
  constructor(private paymentservice:PaymentService ) { }

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
