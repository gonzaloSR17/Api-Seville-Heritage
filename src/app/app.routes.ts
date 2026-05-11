import { Routes } from '@angular/router';
import { Wiki } from './src/wiki/wiki';
import { Main } from '../main/main';

export const routes: Routes = [
{ path: '', component: Main},
  { path: 'wiki', component: Wiki }
];
