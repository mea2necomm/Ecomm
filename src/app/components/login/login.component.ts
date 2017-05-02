import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
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
  returnUrl: string;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private cartservice : ShoppingcartService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
  }

  register(){
    this.router.navigate(['/register'], { queryParams: { returnUrl: this.returnUrl }});
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
              this.router.navigate([this.returnUrl]);
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
