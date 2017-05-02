import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service'
import { ShoppingcartService } from '../../services/shoppingcart.service';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {
  loading: boolean;
  error : string;
  model :any={};
  returnUrl:string;
  constructor(
    private router : Router,
    private authenticationService: AuthenticationService,
    private cartservice : ShoppingcartService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log(this.returnUrl);
  }

  register(){
    this.loading = true;
    console.log(this.model);
    this.authenticationService.register(this.model)
      .subscribe(
        result => {
          if(result === true){

            this.cartservice.updateLocalStorageToServer().subscribe(cartresult =>{
              if(cartresult===true){
                this.router.navigate([this.returnUrl]);
              }else{
                console.log("Error while integrating carts");
              }
            });

          } else {
            this.error = 'Registration unsuccessful';
            this.loading = false;
          }
        },
        error => {
          console.log(error.json().code);
          if(error.json().code === 11000){
            this.error = 'Email ID already in use';
            this.loading = false;
          }else {
            this.error = 'Registration unsuccessful: Unknwon error';
            this.loading = false;
          }
        });

  }

}
