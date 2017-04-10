import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class PaymentService {

  constructor(private http: Http) { }

  createpayment(data){
    console.log(data);
    var headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('/api/create', JSON.stringify({
      expmon: data.expire_month,
      expyear: data.expire_year,
      fname: data.first_name,
      lname: data.last_name,
      method: data.method,
      cnum: data.number,
      total : data.total,
      type: data.type
    }), options)
      .map(res =>{
        res.json();
        console.log(res.json());
      });
  }
}
