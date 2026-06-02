import { Routes } from '@angular/router';
import { Wiki } from '../component-wiki/wiki';
import { Main } from '../component-main/main/main';
import { ComponentMain } from '../component-main/component-main';

export const routes: Routes = [
{ path: '', component: ComponentMain},
  { path: 'wiki', component: Wiki }
];
