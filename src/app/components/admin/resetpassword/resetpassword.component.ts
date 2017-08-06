import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  private users:any = null;
  constructor(private userservice:UsersService ) { }

  ngOnInit() {

    this.userservice.getUsers().subscribe(users => {
      if(users){
        console.log(users);
        this.users = users;
      }else{
        console.log("users not found");
      }
    });
  }

}
