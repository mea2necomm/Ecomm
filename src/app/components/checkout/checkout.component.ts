import { Component, OnInit } from '@angular/core';
import {SearchQuery} from "../../models/SearchQuery";
import {ShoppingcartService} from "../../services/shoppingcart.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartitems: SearchQuery[];
  total: number;
  price: number;
  fullname: string;
  expirydate: any;
  cardnumber:number;
  paymentmethod: string;
  cvcode: number;
  paypalactive : boolean = false;
  creditactive : boolean = false;
  constructor(private cartservice: ShoppingcartService) { }

  ngOnInit() {
    this.price = this.cartservice.getPricePerYear();
    this.cartservice.getShoppingCart().subscribe( cartitems => this.cartitems = cartitems);
    //if user is logged in fetch from a different method
    this.total = this.totalprice();
    console.log(this.total);
  }

  totalprice(){
    var total = 0;
    for(var i = 0; i < this.cartitems.length; i++){
      total+= (this.cartitems[i].toYear - this.cartitems[i].fromYear + 1) * this.price;
    }
    return total;
  }

  paymethod(type){
    if(type === 'paypal'){
      this.paypalactive = true;
      this.creditactive = false;
    }
    if(type === 'credit'){
      this.creditactive = true;
      this.paypalactive = false;
    }
  }

  pay(){
    var payment = {
      "intent": "sale",
      "payer": {
        "payment_method" : "",
        "funding":""
      },
      "transactions": [{
        "amount": {
          "currency": "USD",
          "total": this.total
        },
        "description": "Payment towards holidays"
      }]
    };

    if(this.creditactive){
      payment.payer.payment_method = 'credit_card';
    }
    if(this.paypalactive){

    }
  }
}
