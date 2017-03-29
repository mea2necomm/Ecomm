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

  constructor(private activatedRoute: ActivatedRoute, private hselectionService:HselectionService) { }

  ngOnInit() {
    console.log("in holiday list service");
    this.paramsSub = this.activatedRoute.params.subscribe(params => {

      this.country = params['country'];
      this.state = params['state'];
      this.city = params['city'];
      this.fromdate = params['fromdate'];
      this.todate = params['todate'];
      console.log(this.country);
      var data = {
        country : this.country,
        state: this.state,
        city: this.city,
        fromDate: this.fromdate,
        toDate: this.todate
      };
      this.hselectionService.getHolidays(data).subscribe(holidays =>
      {
        this.holidays = holidays.theList;
        console.log(this.holidays);
      });
    });



  }

}
