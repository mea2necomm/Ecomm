import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser:any;
  isloggedin:boolean;

  constructor(
    private authenticationService: AuthenticationService
  ) {
    let curuser:any = authenticationService.currentUser();
    if(curuser !== false){
      this.currentUser = curuser;
      this.isloggedin =  true;
    }else{
      this.isloggedin = false;
    }

    //console.log("navbar-currentuser" + this.currentUser);

  }

  ngOnInit() {

  }

  logout(event){
    //event.preventDefault();
    this.authenticationService.logout();
    this.isloggedin = false;
    //this.ref.reattach();
    //this.router.navigate(['/']);
  }

}
