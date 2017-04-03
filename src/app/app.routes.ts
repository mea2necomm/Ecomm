import { Routes } from '@angular/router';

import { HselectionComponent } from 'app/hselection/hselection.component';
import { HolidaylistComponent } from 'app/holidaylist/holidaylist.component';
import { LoginComponent } from 'app/login/login.component';
import {RegisterComponent} from "./register/register.component";
import { AuthGuard } from './_gaurds/auth.gaurd';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'hselection',
    pathMatch: 'full'
  },
  {
    path: 'hselection',
    component: HselectionComponent
  },
  {
    path : '',
    component : HselectionComponent
  },
  {
    path : 'holidaylist/:country/:state/:city/:fromdate/:todate',
    component: HolidaylistComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : 'register',
    component: RegisterComponent
  }
  ];
