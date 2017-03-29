import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HselectionComponent } from './hselection/hselection.component';
import { routes } from './app.routes';

import { HselectionService } from './hselection.service';
import { HolidaylistComponent } from './holidaylist/holidaylist.component';

// Define the routes

@NgModule({
  declarations: [
    AppComponent,
    HselectionComponent,
    HolidaylistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes) // Add routes to the app
  ],
  providers: [HselectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
