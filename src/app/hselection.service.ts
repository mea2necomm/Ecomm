import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HselectionService {

  constructor(private http: Http) { }

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
}
