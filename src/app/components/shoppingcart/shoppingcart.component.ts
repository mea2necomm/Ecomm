import { Component, OnInit } from '@angular/core';
import { ShoppingcartService } from '../../services/shoppingcart.service';
@Component({
  selector: 'app-shoppingcart',
  templateUrl: 'shoppingcart.component.html',
  styleUrls: ['shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  cartitems: any [];

  constructor(private cartservice : ShoppingcartService) { }

  ngOnInit() {
    console.log(this.cartservice.getShoppingCart());
    // if user is not logged in
    this.cartitems = this.cartservice.getShoppingCart();
    //if user is logged in fetch from a different method
  }

  removeallfromcart(){
    // if user is not logged in
    this.cartservice.clearItems();
    this.cartitems = [];
    //if user is logged in call a different method
  }

}
