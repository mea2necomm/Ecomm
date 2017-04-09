import {Component, OnInit, ChangeDetectorRef, Input} from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { ShoppingcartService } from '../../services/shoppingcart.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser:any;
  isloggedin: boolean;
  @Input() cartnumber: number;
  numitems: number;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private cartservice : ShoppingcartService
  ) {
    console.log(this.cartnumber);
    this.isloggedin = authenticationService.isLoggedIn();
    let curuser:any = authenticationService.currentUser();
    if(curuser !== false){
      this.currentUser = curuser;
      console.log(this.currentUser);
    }
    //this.numitems = this.cartservice.getItemNum();

    this.cartservice.getShoppingCart().subscribe(cartItems =>
    {
      this.numitems = cartItems.length;
      console.log("cartnumber" + this.numitems);
    });

  }

  ngOnInit() {


  }

  logout(event){
    event.preventDefault();
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

}
