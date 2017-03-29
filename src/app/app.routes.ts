import { Routes } from '@angular/router';

import { HselectionComponent } from 'app/hselection/hselection.component';
import { HolidaylistComponent } from 'app/holidaylist/holidaylist.component';

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
    component: HolidaylistComponent
  }
  ];
