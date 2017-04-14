import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-logout',
  templateUrl: 'logout.component.html'
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router){ }

  ngOnInit() {
    this.router.navigate(['/']);
  }

}
