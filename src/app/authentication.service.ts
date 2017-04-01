import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import {Observable} from "rxjs";

@Injectable()
export class AuthenticationService {
  public token: string;
  constructor(private http: Http) { }

  getToken(){
    return localStorage.getItem('mea2necomm-token');
  }

  saveToken(token){
    console.log(token);
    localStorage.setItem('mea2necomm-token',token);
  }
  login(useremail: string, password: string){
    return this.http.post('/api/login', { email: useremail, password: password })
      .map((response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        if (token) {
          this.saveToken(token);

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      })
      .catch((error, caught) => {
        if (error.status === 401) {
          console.log(error);

        }
        return Observable.throw(error);
      });
  }

}
