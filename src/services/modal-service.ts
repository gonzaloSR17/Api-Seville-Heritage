import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { edificios } from '../models/edificios.model';

@Injectable({ providedIn: 'root' })
export class ModalService {

  private urlSubject = new BehaviorSubject<edificios | null>(null);
  url$ = this.urlSubject.asObservable();
  visible: boolean = false;

  show() {
    console.log("Entro")
    this.visible = true;
  }

  setUrl(url: edificios) {
      this.urlSubject.next(url);
    }
}
