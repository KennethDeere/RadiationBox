import { Routes } from '@angular/router';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { QueComponent } from '../app/que/que.component';
import { RadboxComponent } from '../app/radbox/radbox.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  // { path: '', component: AppComponent, pathMatch: 'full' },
  { path: '', component: NavbarComponent, pathMatch: 'full' },
  { path: 'que', component: QueComponent },
  { path: 'micro', component: RadboxComponent },
];
