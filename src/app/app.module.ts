import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HselectionComponent } from './hselection/hselection.component';
import { routes } from './app.routes';
import { AuthGuard } from './_gaurds/auth.gaurd';

import { HselectionService } from './services/hselection.service';
import { HolidaylistComponent } from './holidaylist/holidaylist.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import {CustomValidator} from "./equal-validator.directive";

// Define the routes

@NgModule({
  declarations: [
    AppComponent,
    HselectionComponent,
    HolidaylistComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    CustomValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes) // Add routes to the app
  ],
  providers: [HselectionService, AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
