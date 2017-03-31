import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HselectionService } from '../hselection.service'

@Component({
  selector: 'app-holidaylist',
  templateUrl: './holidaylist.component.html',
  styleUrls: ['./holidaylist.component.css']
})
export class HolidaylistComponent implements OnInit {
  country: any;
  state: any;
  city : any;
  fromdate : any;
  todate : any;
  paramsSub: any;
  holidays : any =[];
  businessesClosed:string;
  banksClosed:string;
  religiousHoliday:string;
  religion:string;
  errorMessage:string;
  constructor(private activatedRoute: ActivatedRoute, private hselectionService:HselectionService) { }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => {

      this.country = params['country'];
      this.state = params['state'];
      if(this.state == 'State'){
        this.state = 'none';
      }
      this.city = params['city'];
      if(this.city == 'City'){
        this.city = 'none';
      }
      this.fromdate = params['fromdate'];
      this.todate = params['todate'];
      var data = {
        country : this.country,
        state: this.state,
        city: this.city,
        fromDate: this.fromdate,
        toDate: this.todate
      };
      this.hselectionService.getHolidays(data)
        .subscribe(
          holidays =>
          {
            this.holidays = holidays.theList;
            console.log(this.holidays);
          },
          error => this.errorMessage = <any>error
        );
    });



  }

  setholiday(holiday){
    console.log(holiday);
    this.businessesClosed = holiday.businessesClosed;
    this.banksClosed = holiday.banksClosed;
    this.religiousHoliday = holiday.religiousHoliday;
    this.religion = holiday.religion;
  }

}
