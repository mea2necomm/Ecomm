import { Injectable } from '@angular/core';
import {ShoppingcartService} from "./shoppingcart.service";
import {AuthenticationService} from "./authentication.service";
import { Headers, RequestOptions, Http } from '@angular/http';
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
@Injectable()
export class OrderService {

  constructor(
    private cartservice: ShoppingcartService,
    private authservice: AuthenticationService,
    private http: Http,
    private router: Router
  ) { }
  pushtoorders(paymentid, total){
    this.cartservice.getShoppingCart().subscribe(cartitems => {

      var user = this.authservice.currentUser();
      var headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      });
      headers.append('Authorization', 'Bearer '+ this.authservice.getToken());

      let options = new RequestOptions({headers: headers});
      this.http.post('/api/orders', JSON.stringify({
        useremail: user.email,
        cartItems: cartitems,
        paymentid: paymentid,
        total: total
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
        .subscribe(res => {
          if(res == true){
            this.cartservice.clearItems();
            this.router.navigate(['/success'])
          }
          else {
            this.router.navigate(['/failure'])
          }
        },error=>{
        console.log(error);
        this.router.navigate(['/failure'])
      });
    });

  }

  getuserorders(){
    if(this.authservice.isLoggedIn()) {

      let headers = new Headers({ 'Accept': 'application/json' });
      headers.append('Authorization', 'Bearer '+ this.authservice.getToken());
      let options = new RequestOptions({ headers: headers });

      var user = this.authservice.currentUser();

      return this.http.get('/api/orders/' + user.email,options)
        .map(res => res.json());
    }
  }

}
