import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HselectionComponent } from './components/hselection/hselection.component';
import { routes } from './app.routes';
import { AuthGuard } from './_gaurds/auth.gaurd';

import { HselectionService } from './services/hselection.service';
import { ShoppingcartService } from './services/shoppingcart.service';
import { HolidaylistComponent } from './components/holidaylist/holidaylist.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { CustomValidator } from "./equal-validator.directive";
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import {PaymentService} from "./services/payment.service";

// Define the routes

@NgModule({
  declarations: [
    AppComponent,
    HselectionComponent,
    HolidaylistComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    CustomValidator,
    ShoppingcartComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes) // Add routes to the app
  ],
  providers: [HselectionService, AuthenticationService, ShoppingcartService, AuthGuard, PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
