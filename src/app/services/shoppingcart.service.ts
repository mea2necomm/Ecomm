import { Injectable } from '@angular/core';
import { SearchQuery } from '../models/SearchQuery';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class ShoppingcartService {
  public shoppingCart: SearchQuery[];


  constructor() {
    let savedShoppingCart = JSON.parse(localStorage.getItem('mea2necomm-shopping-cart'));
    if(savedShoppingCart){
      this.shoppingCart = savedShoppingCart;
    }else{
      this.shoppingCart = [];
    }
  }

  getShoppingCart():SearchQuery[]{
    return this.shoppingCart;
  }

  addItem(cartItem:SearchQuery){
    this.shoppingCart.push(cartItem);
    this.updateStorage();
}
  addItems(cartItems:SearchQuery[]){
    this.shoppingCart.concat(cartItems);
    this.updateStorage();
  }

  clearItems(){
    this.shoppingCart = [];
    this.updateStorage();
  }

  private updateStorage(){
    localStorage.setItem('mea2necomm-shopping-cart', JSON.stringify(this.shoppingCart));
  }

  getItemNum(){
    return this.shoppingCart.length;
  }

}
