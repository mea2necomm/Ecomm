import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HselectionService } from '../../services/hselection.service'
import { ShoppingcartService } from '../../services/shoppingcart.service'

@Component({
  selector: 'app-holidaylist',
  templateUrl: 'holidaylist.component.html',
  styleUrls: ['holidaylist.component.css']
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
  route: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private hselectionService:HselectionService,
    private cartservice: ShoppingcartService,
  ) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.url[0].path);
    this.route = this.activatedRoute.snapshot.url[0].path;
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
        fromYear: this.fromdate,
        toYear: this.todate
      };

      if(this.route == 'freeholidaylist'){
        this.hselectionService.getFreeHolidays(data)
          .subscribe(holidays =>{
              console.log(holidays);
              this.holidays = holidays.theList;
            },
            error =>{
              this.errorMessage = error.json().errormessage;
              console.log(this.errorMessage);

            });
      } else if (this.route == 'holidaylist'){
        //Check orderlist run the following block only of excess date range is in orderlist

        this.hselectionService.getHolidays(data)
          .subscribe(
            holidays =>
            {
              this.holidays = holidays.theList;
              console.log(this.holidays);
            },
            error => this.errorMessage = <any>error
          );

        // Add to cart if above is false

        this.cartservice.addItem(data);
      }


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
