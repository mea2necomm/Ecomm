import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import {Observable} from "rxjs";

import { SearchQuery } from '../models/SearchQuery';
import { AuthenticationService } from '../services/authentication.service';
@Injectable()
export class UsersService {

  constructor(private http: Http,
              private authenticationService: AuthenticationService) { }

  getUsers(){
    //return this.shoppingCart;
    console.log("getting saved cart");
    if(this.authenticationService.isLoggedIn()){

      let headers = new Headers({ 'Accept': 'application/json' });
      headers.append('Authorization', 'Bearer '+ this.authenticationService.getToken());
      let options = new RequestOptions({ headers: headers });

      // returning observable to calling component
      return this.http.get('/api/users/' ,options )
        .map(res => res.json());
    }
  }

}
