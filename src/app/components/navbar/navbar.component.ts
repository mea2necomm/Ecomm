import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser:any;
  isloggedin: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.isloggedin = authenticationService.isLoggedIn();
    let curuser:any = authenticationService.currentUser();
    if(curuser !== false){
      this.currentUser = curuser;
      console.log(this.currentUser);
    }
    //console.log("navbar-currentuser" + this.currentUser);
  }

  ngOnInit() {

  }

  logout(event){
    event.preventDefault();
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

}
