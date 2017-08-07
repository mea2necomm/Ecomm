import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-resetrequest',
  templateUrl: './resetrequest.component.html',
  styleUrls: ['./resetrequest.component.css']
})
export class ResetrequestComponent implements OnInit {
  model :any={};
  private resetMessage:string = "";
  constructor(private userservice:UsersService ) { }

  ngOnInit() {
  }

  resetrequest(){
    console.log(this.model);
    this.resetMessage = "Sending email...";

    this.userservice.resetPassword(this.model.email).subscribe(info => {
      if(info){
        console.log(info);
        this.resetMessage = "Reset email sent. Please login to your email and continue to reset password.";

      }else{
        console.log("Unable to send reset email");
        this.resetMessage = "Unable to send reset email";
      }

    });
  }

}
