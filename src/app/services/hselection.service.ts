import { Injectable } from '@angular/core';

import { Http,RequestOptions,Headers } from '@angular/http';
import { AuthenticationService } from './authentication.service';
import 'rxjs/add/operator/map';

@Injectable()
export class HselectionService {

  constructor(private http: Http, private authentication: AuthenticationService) { }

  // Get all posts from the API
  getAllCountries() {
  return this.http.get('/api/countries')
  .map(res => res.json());
  }

  getStates(country) {
  return this.http.get('/api/countryStates/'+country)
  .map(res => res.json());
  }

  getCities(state,country) {
  return this.http.get('/api/countryStateCities/'+state + '/' + country)
  .map(res => res.json());
  }

  getHolidays(data){
    console.log(this.authentication.getToken());
    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('Authorization', 'Bearer '+ this.authentication.getToken());
    let options = new RequestOptions({ headers: headers });
    return this.http.get('/api/holidays/'+data.country + '/' + data.state+'/'+data.city+'/'+data.fromYear+'/'+data.toYear,options)
      .map(res => res.json());
  }

  getFreeHolidays(data){
    return this.http.get('/api/freeholidays/'+data.country + '/' + data.state+'/'+data.city+'/'+data.fromYear+'/'+data.toYear)
      .map(res => res.json());
  }

  getYear(){
    return this.http.get('/api/currentyear')
      .map(res => res.json());
  }
}
