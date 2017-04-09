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

  cartitems: SearchQuery [];
  cartnumber: number;
  price: number;
  total: number;

  constructor(
    private cartservice : ShoppingcartService,
    private router : Router
  ) { }

  ngOnInit() {
    this.price = this.cartservice.getPricePerYear();

    console.log(this.cartservice.getShoppingCart());
    // if user is not logged in
    this.cartitems = this.cartservice.getShoppingCart();
    //if user is logged in fetch from a different method
    this.total = this.totalprice();
    console.log(this.total);
  }

  removeallfromcart(){
    // if user is not logged in
    this.cartservice.clearItems();
    this.cartitems = [];
    this.cartnumber = 0;
    //if user is logged in call a different method
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
