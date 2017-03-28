import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HselectionComponent } from './hselection/hselection.component';

import { HselectionService } from './hselection.service';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'hselection',
    pathMatch: 'full'
  },
  {
    path: 'hselection',
    component: HselectionComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HselectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [HselectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
