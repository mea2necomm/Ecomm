import { Component, OnInit } from '@angular/core';
import {SearchQuery} from "../../models/SearchQuery";
import {ShoppingcartService} from "../../services/shoppingcart.service";
import {PaymentService} from "../../services/payment.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartitems: SearchQuery[];
  total: number;
  //price: number;
  pricing:any=null;
  firstname: string;
  lastname: string;
  expirydate: string;
  cardnumber:number;
  paymentmethod: string;
  cvcode: number;
  paypalactive : boolean = false;
  creditactive : boolean = false;
  res: any;
  constructor(
    private cartservice: ShoppingcartService,
    private paymentservice: PaymentService
  ) { }

  ngOnInit() {
    //this.price = this.cartservice.getPricePerYear();
    this.cartservice.getShoppingCart().subscribe( cartitems =>{
      this.cartitems = cartitems;
      this.total = this.totalprice();
      console.log(this.total);
    });

    this.paymentservice.getPricing().subscribe(pricing => {
      if(pricing){
        this.pricing = pricing;
      }
      console.log("the pricing object:");
      console.log(pricing);
    });
    //if user is logged in fetch from a different method


  }

  totalprice(){
    var total = 0;
    for(var i = 0; i < this.cartitems.length; i++){
      total+= this.itemprice(this.cartitems[i]);
    }
    return total;
  }

  daydiff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
  }

  itemprice(item){
    var itemprice = 0;
    if(item.state == "State"){
      itemprice = this.pricing.countryPrice;
    }else if(item.city == "City"){
      itemprice = this.pricing.statePrice;
    }else{
      itemprice = this.pricing.cityPrice;
    }
    var fromdate = new Date(item.fromYear,item.fromMonth,item.fromDay);
    var todate = new Date(item.toYear,item.toMonth,item.toDay);
    var noofdays = this.daydiff(fromdate,todate);

    var priceperday = itemprice/365;
    var totalprice = priceperday*noofdays;
    if (totalprice > this.pricing.minPrice)
      return (totalprice);
    else
      return(this.pricing.minPrice);

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

  getType(number){
    var re = new RegExp("^4");
    if (number.match(re) != null)
      return "visa";

    // Mastercard
    re = new RegExp("^5[1-5]");
    if (number.match(re) != null)
      return "mastercard";

    // AMEX
    re = new RegExp("^3[47]");
    if (number.match(re) != null)
      return "amex";

    // Discover
    re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
    if (number.match(re) != null)
      return "discover";

    // Diners
    re = new RegExp("^36");
    if (number.match(re) != null)
      return "diners";
  }
  pay(){
    var type = this.getType(this.cardnumber);
    console.log(type);
    if(this.creditactive){
      var payment = {
        "total": this.total,
        "method": "credit",
        "type": type,
        "number": this.cardnumber,
        "expire_month": this.expirydate.split("/")[0],
        "expire_year": this.expirydate.split("/")[1],
        "first_name": this.firstname,
        "last_name": this.lastname,
        "cvv2" : this.cvcode
      };
      this.paymentservice.createpayment(payment);

    }

    if(this.paypalactive){

    }
  }
}
