import { Component } from '@angular/core';
import { WikiMain } from './wiki-main/wiki-main';

@Component({
  selector: 'app-wiki',
  imports: [WikiMain],
  templateUrl: './wiki.html',
  styleUrl: './wiki.css',
})
export class Wiki {

}
