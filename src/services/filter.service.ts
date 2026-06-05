import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EdificioPoo } from '../models/edificio.model';

@Injectable({ providedIn: 'root' })
export class FilterService {

  // Variable para almacenar la url del filtro  
  private urlSubject = new BehaviorSubject<EdificioPoo | null>(null);
  url$ = this.urlSubject.asObservable();

  setUrl(url: EdificioPoo) {
    this.urlSubject.next(url);
  }
}