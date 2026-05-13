import { Component } from '@angular/core';
import { WikiMain } from './wiki-main/wiki-main';
import { WikiSidebar } from './wiki-sidebar/wiki-sidebar';

@Component({
  selector: 'app-wiki',
  imports: [WikiMain, WikiSidebar],
  templateUrl: './wiki.html',
  styleUrl: './wiki.css',
})
export class Wiki {

}
