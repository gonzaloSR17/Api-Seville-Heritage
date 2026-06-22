import { Component } from '@angular/core';
import { WikiModal } from '../wiki-modal/wiki-modal';
import { ModalService } from '../../services/modal-service';

@Component({
  selector: 'app-wiki-navbar',
  imports: [],
  templateUrl: './wiki-navbar.html',
  styleUrl: './wiki-navbar.css',
})
export class WikiNavbar {

  // Contructor a ModalServices
     constructor(
        public modalService: ModalService
      ) {}

}
