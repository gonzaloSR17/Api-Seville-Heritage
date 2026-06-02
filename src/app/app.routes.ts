import { Routes } from '@angular/router';
import { Wiki } from '../component-wiki/wiki';
import { Main } from '../component-main/main/main';

export const routes: Routes = [
{ path: '', component: Main},
  { path: 'wiki', component: Wiki }
];
