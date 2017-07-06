import {Component, OnInit, Input} from '@angular/core';
import { HselectionService } from '../../services/hselection.service'
import { ShoppingcartService } from '../../services/shoppingcart.service'
import { Router } from '@angular/router'
import {IMyDpOptions, IMyDateModel} from "mydatepicker";

@Component({
moduleId: module.id,
  selector: 'app-hselection',
  templateUrl: 'hselection.component.html',
  styleUrls: ['hselection.component.css']
})
export class HselectionComponent implements OnInit {
  private myFromDateOptions: IMyDpOptions = {
    height: '34px',
    width: '210px',
    disableSince: {year: 0, month: 0, day: 0},
    alignSelectorRight: false,
    openSelectorTopOfInput: false,
    indicateInvalidDate: true,
    monthSelector: true,
    yearSelector: true,
    dateFormat: 'mm/dd/yyyy'
  };
  private myToDateOptions: IMyDpOptions = {
    height: '34px',
    width: '210px',
    disableUntil: {year: 0, month: 0, day: 0},
    alignSelectorRight: false,
    openSelectorTopOfInput: false,
    indicateInvalidDate: true,
    monthSelector: true,
    yearSelector: true,
    dateFormat: 'mm/dd/yyyy'
  };
  selectedcountry:string = "Country";
  selectedstate:string = "State";
  selectedcity:string = "City";
  @Input() country: string;
  @Input() state: string;
  @Input() city: string;
  fromdateplaceholder: string = "From Date (MM/DD/YYYY)";
  todateplaceholder: string = "To Date (MM/DD/YYYY)";
	countries: any = [];
  states: any = [];
  cities: any = [];
  holidays: any = [];
  date: any;
  cartnumber: number;
  currentyear: number;
  showAdvDate: boolean = false;
  yearentry: boolean = false;
  yearselect: number;
  fromDate:any = null;
  toDate:any = null;
  submitenabled: boolean = false;
  constructor(
    private hselectionService:HselectionService,
    private cartservice: ShoppingcartService,
    private router: Router
  ){
  }

  ngOnInit() {
    if(this.country){
      this.selectedcountry=this.country;
      this.submitenabled = true;
    }
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
    this.hselectionService.getCountryCites(country).subscribe(cities =>
    {
      this.cities = cities.theList;
      this.states = states.theList;
      this.selectedcountry = country;
      this.selectedstate = "State";
      this.selectedcity = "City";
      this.submitenabled = true;
    });

  });
  }

  enablesubmit(){
    if(this.submitenabled && this.fromDate != null && this.toDate != null){
      if(this.fromDate.year > 0 && this.toDate.year > 0){
        return false;
      }
      else{
        return true;
      }
    }
    else if (this.submitenabled && this.yearselect > 1200 && this.yearselect < 9999){
      return false;
    }
    else{
      return true;
    }
  }

  datecheck(){
    if(this.currentyear >= this.yearselect && this.yearselect != null){
      return true;
    }
    else if(this.toDate !=null){
      if(this.currentyear >= this.toDate.year){
        return true;
      }
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

  fetchHolidays(){
    if(!this.selectedstate){
      this.selectedstate = 'none';
    }
    if(!this.selectedcity){
      this.selectedcity = 'none';
    }
    if(this.yearentry){
      console.log(this.toDate.year+"/"+this.toDate.month+"/"+this.toDate.day);
      console.log(this.fromDate.year+"/"+this.fromDate.month+"/"+this.fromDate.day);
      this.router.navigate(['/freeholidaylist',this.selectedcountry,this.selectedstate,this.selectedcity,this.fromDate.year,this.fromDate.month,this.fromDate.day,this.toDate.year,this.toDate.month,this.toDate.day])
    }
    else{
      this.router.navigate(['/freeholidaylist',this.selectedcountry,this.selectedstate,this.selectedcity,this.yearselect,'1','1',this.yearselect,'12','31']);
    }
  }

  showDate(){
    this.showAdvDate = !this.showAdvDate;
    this.yearselect = null;
    this.fromDate = null;
    this.toDate = null;
    this.yearentry = !this.yearentry;
  }

  onFromDateChanged(event: IMyDateModel){
    console.log(event.date);
    let toOptions = JSON.parse(JSON.stringify(this.myToDateOptions));
    toOptions.disableUntil = {year:event.date.year,month:event.date.month,day:event.date.day};
    this.myToDateOptions = toOptions;
    this.fromDate = event.date;
  }

  onToDateChanged(event: IMyDateModel){
    console.log(event.date);
    let fromOptions = JSON.parse(JSON.stringify(this.myFromDateOptions));
    fromOptions.disableSince = {year:event.date.year,month:event.date.month,day:event.date.day};
    this.myFromDateOptions = fromOptions;
    this.toDate = event.date;
  }

  addtocart(){
    //check orders, if in orders go to holiday list, else add to cart

    //check if only one year is entered or date range, create from date and to date accordingly

    let data = {
      country : this.selectedcountry,
      state: this.selectedstate,
      city: this.selectedcity,
      fromYear: 0,
      fromMonth: 0,
      fromDay: 0,
      toYear: 0,
      toMonth: 0,
      toDay: 0
    };
    if(this.yearentry){
      data.fromYear = this.fromDate.year;
      data.fromMonth = this.fromDate.month;
      data.fromDay = this.fromDate.day;
      data.toYear = this.toDate.year;
      data.toMonth = this.toDate.month;
      data.toDay = this.toDate.day;
    }
    else {
      data.fromYear = this.yearselect;
      data.fromMonth = 1;
      data.fromDay = 1;
      data.toYear = this.yearselect;
      data.toMonth = 12;
      data.toDay = 31;
    }
    console.log(data);
    this.cartservice.addItem(data);

    this.cartservice.getShoppingCart().subscribe(cartItems =>
    {
      this.cartnumber = cartItems.length;
      console.log("cartnumber" + this.cartnumber);
    });

  }
}
