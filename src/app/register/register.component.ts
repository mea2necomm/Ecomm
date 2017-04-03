import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loading: boolean;
  error : string;
  model :any={};

  constructor(private router : Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  register(){
    this.loading = true;
    console.log(this.model);
    this.authenticationService.register(this.model)
      .subscribe(
        result => {
          if(result === true){
            this.router.navigate(['/']);
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
