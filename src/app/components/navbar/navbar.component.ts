import {Component, OnInit, ChangeDetectorRef, Input} from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { ShoppingcartService } from '../../services/shoppingcart.service'
import { Router,ActivatedRoute } from '@angular/router';

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
  route: string;
  selection: number;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private cartservice : ShoppingcartService,
    private activatedRoute: ActivatedRoute
  ) {
    console.log(this.cartnumber);
    this.route = this.activatedRoute.snapshot.url[0].path;
    if(this.route == "hselection" || this.route == "holidaylist" || this.route == "freeholidaylist")
    {
      this.selection = 1;
    }
    else if (this.route == "instructions"){
      this.selection = 2;
    }
    else if (this.route == "pricing"){
      this.selection = 3;
    }
    else if (this.route == "info"){
      this.selection = 4;
    }
    this.isloggedin = authenticationService.isLoggedIn();
    let curuser:any = authenticationService.currentUser();
    if(curuser !== false){
      this.currentUser = curuser;
      console.log("checking if this is executed");
      console.log(this.currentUser);
      if(this.currentUser!=null) {
        console.log("user role:" + this.currentUser.role);
      }
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
    this.router.navigate(['/logout']);
  }

}
