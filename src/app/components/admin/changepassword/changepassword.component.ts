import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  private requesteduuid:string = null;
  private user:any = null;
  private updateresult:string ="";
  constructor(private userservice:UsersService,
  private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {

      this.requesteduuid = params['requesteduuid'];

      console.log("before call");
      this.userservice.getUserByUUID(this.requesteduuid).subscribe(user => {
        if(user){
          console.log(user);
          this.user = user;
        }else{
          console.log("user with uuid not found");
        }
      });
      console.log("before call");

    });
  }

  resetpassword(pass){
    this.userservice.updatePassword(this.requesteduuid,pass).subscribe(result =>{
      if(result){
        console.log(result);
        this.updateresult = "Successful!";
      }else{
        console.log("Error while changing password");
        this.updateresult = "Unsuccessful";
      }
    });
  }

}
