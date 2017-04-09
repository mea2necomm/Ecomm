import { Component, OnInit } from '@angular/core';
import { ShoppingcartService } from '../../services/shoppingcart.service';
import {SearchQuery} from "../../models/SearchQuery";
import { Router } from '@angular/router';
@Component({
  selector: 'app-shoppingcart',
  templateUrl: 'shoppingcart.component.html',
  styleUrls: ['shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {


  cartitems: any = [];
  cartnumber: number;
  price: number;
  total: number;

  constructor(
    private cartservice : ShoppingcartService,
    private router : Router
  ) { }

  ngOnInit() {
    this.price = this.cartservice.getPricePerYear();

    this.cartservice.getShoppingCart().subscribe(usercartitems => {
      if(usercartitems){
        console.log("shopping cart component");
        console.log(usercartitems);
      }

      this.cartitems = usercartitems;
      //console.log("shoppingcart component: " + this.cartitems[0].country);
    });
    this.total = this.totalprice();
    console.log(this.total);
  }

  removeallfromcart(){
    this.cartservice.clearItems();
    this.cartitems = [];
    this.cartnumber = 0;
  }

  totalprice(){
    var total = 0;
    for(var i = 0; i < this.cartitems.length; i++){
      total+= (this.cartitems[i].toYear - this.cartitems[i].fromYear + 1) * this.price;
    }
    return total;
  }

  checkout(){
    this.router.navigate(['/checkout']);
  }

}
