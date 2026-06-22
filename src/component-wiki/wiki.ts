import { Component } from '@angular/core';
import { WikiMain } from './wiki-main/wiki-main';
import { WikiSidebar } from './wiki-sidebar/wiki-sidebar';
import { WikiModal } from './wiki-modal/wiki-modal';
import { WikiModalMap } from "./wiki-modal-map/wiki-modal-map";
import { WikiMap } from './wiki-map/wiki-map';
import { WikiNavbar } from './wiki-navbar/wiki-navbar';
import { ModalService } from '../services/modal-service';
@Component({
  selector: 'app-wiki',
  imports: [WikiMain, WikiSidebar, WikiModal, WikiModalMap, WikiMap, WikiNavbar],
  templateUrl: './wiki.html',
  styleUrl: './wiki.css',
})
export class Wiki {

  // Contructor a ModalServices
   constructor(
      public modalService: ModalService
    ) {}

    

}
