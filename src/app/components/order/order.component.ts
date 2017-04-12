import { Component, OnInit } from '@angular/core';

import {OrderService} from '../../services/order.service';
import {OrderItem} from "../../models/OrderItem";

@Component({
  selector: 'app-order',
  templateUrl: 'order.component.html',
  styleUrls: ['order.component.css']
})
export class OrderComponent implements OnInit {

  orders:OrderItem[]=[];

  constructor(private orderService : OrderService) {

  }

  ngOnInit() {
      this.orderService.getuserorders().subscribe(userorders => {
        if(userorders){
          this.orders = userorders;
        }
      });
  }
}
