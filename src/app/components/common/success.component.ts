import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-success',
  templateUrl: 'success.component.html'
})
export class SuccessComponent implements OnInit {
  constructor(private router: Router){ }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/orders']);
    }, 5000);
  }

}
