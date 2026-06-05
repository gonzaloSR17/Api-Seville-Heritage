import { Component } from '@angular/core';
import { WikiMain } from './wiki-main/wiki-main';
import { WikiSidebar } from './wiki-sidebar/wiki-sidebar';
import { WikiModal } from './wiki-modal/wiki-modal';
@Component({
  selector: 'app-wiki',
  imports: [WikiMain, WikiSidebar, WikiModal],
  templateUrl: './wiki.html',
  styleUrl: './wiki.css',
})
export class Wiki {

}
