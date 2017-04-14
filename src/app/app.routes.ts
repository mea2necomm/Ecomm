import { Routes } from '@angular/router';

import { HselectionComponent } from './components/hselection/hselection.component';
import { HolidaylistComponent } from './components/holidaylist/holidaylist.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from "./components/register/register.component";
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AuthGuard } from './_gaurds/auth.gaurd';
import { SuccessComponent } from './components/common/success.component';
import { FailureComponent } from './components/common/failure.component';
import { OrderComponent} from './components/order/order.component';
import {LogoutComponent} from "./components/common/logout.component";

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
    path : 'freeholidaylist/:country/:state/:city/:fromdate/:todate',
    component: HolidaylistComponent
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : 'register',
    component: RegisterComponent
  },
  {
    path: 'shoppingcart',
    component: ShoppingcartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
  ,
  {
    path: 'success',
    component: SuccessComponent
  },
  {
    path: 'failure',
    component: FailureComponent
  },
  {
    path: 'orders',
    component: OrderComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
  ];
