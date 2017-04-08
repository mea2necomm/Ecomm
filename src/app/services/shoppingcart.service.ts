import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import {Observable} from "rxjs";

import { SearchQuery } from '../models/SearchQuery';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class ShoppingcartService {
  public shoppingCart: SearchQuery[];


  constructor(private http: Http,
    private authenticationService: AuthenticationService) {
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
    //if(this.authenticationService.isLoggedIn()){
    if(false){
      var user = this.authenticationService.currentUser();
      // add to server
      return this.http.post('/api/shoppingcart', { useremail: user.email, cartItems: JSON.stringify(this.shoppingCart) })
        .map((response) => {

          if (response.status === 200) {
            // return true to indicate successful saved
            return true;
          } else {
            // return false to indicate it did not save properly
            return false;
          }
        })
        .catch((error, caught) => {
          if (error.status === 401) {
            console.log(error);

          }
          return Observable.throw(error);
        });

    }else{
      localStorage.setItem('mea2necomm-shopping-cart', JSON.stringify(this.shoppingCart));
    }

  }

}
