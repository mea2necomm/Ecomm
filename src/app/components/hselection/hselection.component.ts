import {Component, OnInit, Input} from '@angular/core';

import { HselectionService } from '../../services/hselection.service'
import { ShoppingcartService } from '../../services/shoppingcart.service'
import { Router } from '@angular/router'

@Component({
moduleId: module.id,
  selector: 'app-hselection',
  templateUrl: 'hselection.component.html',
  styleUrls: ['hselection.component.css']
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
  date: any;
  currentyear: number;

  fromDate:number;
  toDate:number;
  submitenabled: boolean = false;
  constructor(
    private hselectionService:HselectionService,
    private cartservice: ShoppingcartService,
    private router: Router
  ){
  }

  ngOnInit() {
    if(this.country){this.selectedcountry=this.country;}
    if(this.state){this.selectedstate=this.state;}
    if(this.city){this.selectedcity=this.city;}
    this.hselectionService.getAllCountries().subscribe(countries =>
	  {
	  	this.countries = countries.theList;
	  });
    this.hselectionService.getYear().subscribe( year =>{
      this.currentyear = year.year;
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
    if(this.submitenabled && this.fromDate > 1200 && this.fromDate < 9999 && this.toDate > 1200 && this.toDate < 9999 && this.fromDate <= this.toDate){
      return false;
    }
    else{
      return true;
    }
  }

  datecheck(){
    if(this.currentyear >= this.toDate){
      return true;
    }
    else {
      return false;
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

  addtocart(){
    //check orders, if in oreders go to holiday list, else add to cart
    var data = {
      country : this.selectedcountry,
      state: this.selectedstate,
      city: this.selectedcity,
      fromYear: this.fromDate,
      toYear: this.toDate
    };
    this.cartservice.addItem(data);
    this.router.navigate([
      '/holidaylist/'
      +this.selectedcountry+'/'
      +this.selectedstate+'/'
      +this.selectedcity+'/'
      +this.fromDate+'/'
      +this.toDate
    ]);
  }
}
