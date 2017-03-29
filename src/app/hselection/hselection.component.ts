import { Component, OnInit } from '@angular/core';

import { HselectionService } from '../hselection.service'

@Component({
moduleId: module.id,
  selector: 'app-hselection',
  templateUrl: './hselection.component.html',
  styleUrls: ['./hselection.component.css']
})
export class HselectionComponent implements OnInit {
	countries: any = [];
  states: any = [];
  cities: any = [];
  holidays: any = [];
  selectedcountry:string = "Country";
  selectedstate:string = "State";
  selectedcity:string = "City";
  fromDate:string;
  toDate:string;
  constructor(private hselectionService:HselectionService){}

  ngOnInit() {
  this.hselectionService.getAllCountries().subscribe(countries =>
	  {
	  	this.countries = countries.theList;
	  });
  }

  countrySelect(country){
  this.hselectionService.getStates(country).subscribe(states =>
  {

    this.states = states.theList;
    this.selectedcountry = country;

  });
  }

  stateSelect(state){
  this.hselectionService.getCities(state,this.selectedcountry).subscribe(cities =>
  {
    this.cities = cities.theList;
    this.selectedstate = state;
  });
  }

  citySelect(city) {
    this.selectedcity = city;
  }

  fetchHolidays(event){
    event.preventDefault();
    console.log(this.toDate);
    console.log(this.fromDate);
    if(!this.selectedstate){
      this.selectedstate = 'none';
    }
    if(!this.selectedcity){
      this.selectedcity = 'none';
    }
    var data = {
      country : this.selectedcountry,
      state: this.selectedstate,
      city: this.selectedcity,
      fromDate: this.fromDate,
      toDate: this.toDate
    };
    this.hselectionService.getHolidays(data).subscribe(holidays =>
    {
      ;
      this.holidays = holidays.theList;
      console.log(this.holidays);
    });


  }
}
