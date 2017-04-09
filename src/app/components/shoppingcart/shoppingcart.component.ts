import { Component, OnInit } from '@angular/core';
import { ShoppingcartService } from '../../services/shoppingcart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: 'shoppingcart.component.html',
  styleUrls: ['shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  cartitems: any = [];
  cartnumber: number;

  constructor(private cartservice : ShoppingcartService) {
    //this.cartitems = this.cartservice.getShoppingCart();
    //console.log(this.cartitems);
  }

  ngOnInit() {
    this.cartservice.getShoppingCart().subscribe(usercartitems => {
      if(usercartitems){
        console.log("shopping cart component");
        console.log(usercartitems);
      }

      this.cartitems = usercartitems;
      //console.log("shoppingcart component: " + this.cartitems[0].country);
    });

  }

  removeallfromcart(){
    this.cartservice.clearItems();
    this.cartitems = [];
    this.cartnumber = 0;
  }

}
