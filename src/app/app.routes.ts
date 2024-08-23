import {Routes} from '@angular/router';
import {HomeComponent} from "../pages/home/home.component";
import {NewArrivalsComponent} from "../pages/new-arrivals/new-arrivals.component";

export const routes: Routes = [{
  path: '', component: HomeComponent},
  {path: 'new', component: NewArrivalsComponent},];
