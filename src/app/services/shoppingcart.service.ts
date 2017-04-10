import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
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
    this.setFromSavedCart();
  }

  getShoppingCart(){
    //return this.shoppingCart;
    console.log("getting saved cart");
    if(this.authenticationService.isLoggedIn()){

      // first setting shopping cart variable locally
      this.http.get('/api/shoppingcart/'+ this.authenticationService.currentUser().email )
        .map(res => res.json()).subscribe(usercartitems=> {
        if(usercartitems)
          console.log(usercartitems);
        this.shoppingCart = usercartitems;
      });

      // returning observable to calling component
      return this.http.get('/api/shoppingcart/'+ this.authenticationService.currentUser().email )
        .map(res => res.json());
    }else{
      let savedShoppingCart = JSON.parse(localStorage.getItem('mea2necomm-shopping-cart'));
      if(savedShoppingCart){
        this.shoppingCart = savedShoppingCart;
      }else{
        this.shoppingCart = [];
      }
      return Observable.of(this.shoppingCart);
    }
  }

  pushtoorders(paymentid) {
    console.log('push to orders');
    console.log(this.shoppingCart);
    console.log(paymentid);
    if (this.authenticationService.isLoggedIn()) {
      var user = this.authenticationService.currentUser();
      var headers = new Headers({
        'Content-Type': 'application/json'
      });
      let options = new RequestOptions({headers: headers});
      this.http.post('/api/orders', JSON.stringify({
        useremail: user.email,
        cartItems: this.shoppingCart,
        paymentid: paymentid
      }), options)
        .map((response) => {
          if (response.status === 200) {
            console.log("saved cart successfully to db");
            // return true to indicate successful saved
            return true;
          } else {
            console.log("error while saving cart to db. Status: " + response.status);
            // return false to indicate it did not save properly
            return false;
          }
        })
        .catch((error, caught) => {
          if (error.status === 401) {
            console.log(error);

          }
          return Observable.throw(error);
        })
        .subscribe();
    }
  }

  addItem(cartItem:SearchQuery){
    this.shoppingCart.push(cartItem);
    console.log("adding item to cart: " + this.shoppingCart);
    this.updateStorage();
}

  removeItem(index:number){
    if(index < this.shoppingCart.length && index >= 0){
      this.shoppingCart.splice(index,1);
      this.updateStorage();
    }
  }

  addItems(cartItems:SearchQuery[]){
    this.shoppingCart = this.shoppingCart.concat(cartItems);
    this.updateStorage();
  }

  clearItems(){
    this.shoppingCart = [];
    this.updateStorage();
  }

  // this function updates the locally stored cart to the server
  // call on login
  updateLocalStorageToServer(){
    if(this.authenticationService.isLoggedIn()){
      let savedShoppingCart = JSON.parse(localStorage.getItem('mea2necomm-shopping-cart'));
      if(savedShoppingCart) {

        this.http.get('/api/shoppingcart/'+ this.authenticationService.currentUser().email )
          .map(res => res.json()).subscribe(usercartitems=> {
          this.shoppingCart = usercartitems;
          this.addItems(savedShoppingCart);
          localStorage.setItem('mea2necomm-shopping-cart', JSON.stringify([]));
        });
      }
    }
  }


  //function sets the local cart variable from either the server or the local storage
  private setFromSavedCart(){
    console.log("getting saved cart");
    if(this.authenticationService.isLoggedIn()){

      // first setting shopping cart variable locally
      this.http.get('/api/shoppingcart/'+ this.authenticationService.currentUser().email )
        .map(res => res.json()).subscribe(usercartitems=> {
        if(usercartitems)
          console.log(usercartitems);
        this.shoppingCart = usercartitems;
      });
    }else{
      let savedShoppingCart = JSON.parse(localStorage.getItem('mea2necomm-shopping-cart'));
      if(savedShoppingCart){
        this.shoppingCart = savedShoppingCart;
      }else{
        this.shoppingCart = [];
      }
    }
  }

  private updateStorage(){
    if(this.authenticationService.isLoggedIn()){
      console.log("setting logged in users cart");
      var user = this.authenticationService.currentUser();
      // add to server
      console.log(user);
      console.log(JSON.stringify({ useremail: user.email, cartItems: this.shoppingCart }));
      var headers = new Headers({
          'Content-Type': 'application/json'
        });
      let options = new RequestOptions({ headers: headers });
      //console.log(headers);

        this.http.post('/api/shoppingcart', JSON.stringify({ useremail: user.email, cartItems: this.shoppingCart }), options)
        .map((response) => {

          if (response.status === 200) {
            console.log("saved cart successfully to db");
            // return true to indicate successful saved
            return true;
          } else {
            console.log("error while saving cart to db. Status: " + response.status);
            // return false to indicate it did not save properly
            return false;
          }
        })
        .catch((error, caught) => {
          if (error.status === 401) {
            console.log(error);

          }
          return Observable.throw(error);
        })
          .subscribe();

    }else{
      console.log("setting non-logged in users cart");
      localStorage.setItem('mea2necomm-shopping-cart', JSON.stringify(this.shoppingCart));
    }

  }

  getItemNum(){
    return this.shoppingCart.length;
  }

  getPricePerYear(){
    return 5;
  }

}
