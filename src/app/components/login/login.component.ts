import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { ShoppingcartService } from '../../services/shoppingcart.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private cartservice : ShoppingcartService) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.useremail, this.model.password)
      .subscribe(
        result => {
          console.log(result);
        if (result === true) {
          this.cartservice.updateLocalStorageToServer().subscribe(cartresult =>{
            if(cartresult===true){
              this.router.navigate(['/']);
            }else{
              console.log("Error while integrating carts");
            }
          });


        } else {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      },
      error => {
          console.log(error);
          this.error = 'Username or password is incorrect';
          this.loading = false;
      });
  }

}
