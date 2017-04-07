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
    this.cartitems = this.cartservice.getShoppingCart();
  }

  removeallfromcart(){
    this.cartservice.clearItems();
  }

}
