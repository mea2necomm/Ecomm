import {Component, OnInit, Input} from '@angular/core';

import { HselectionService } from '../services/hselection.service'

@Component({
moduleId: module.id,
  selector: 'app-hselection',
  templateUrl: './hselection.component.html',
  styleUrls: ['./hselection.component.css']
})
export class HselectionComponent implements OnInit {
  selectedcountry:string = "Country";
  selectedstate:string = "State";
  selectedcity:string = "City";
  @Input() country: string;
  @Input() state: string;
  @Input() city: string;
	countries: any = [];
  states: any = [];
  cities: any = [];
  holidays: any = [];

  fromDate:number;
  toDate:number;
  submitenabled: boolean = false;
  constructor(private hselectionService:HselectionService, ){
  }

  ngOnInit() {
    if(this.country){this.selectedcountry=this.country;}
    if(this.state){this.selectedstate=this.state;}
    if(this.city){this.selectedcity=this.city;}
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
    this.submitenabled = true;

  });
  }

  enablesubmit(){
    if(this.submitenabled && this.fromDate > 1200 && this.fromDate < 9999 && this.toDate > 1200 && this.toDate < 9999){
      return false;
    }
    else{
      return true;
    }
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
      this.holidays = holidays.theList;
      console.log(this.holidays);
    });


  }
}
