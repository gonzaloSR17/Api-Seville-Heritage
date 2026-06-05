import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilterService {

  // Variable para almacenar la url del filtro  
  private urlSubject = new BehaviorSubject<string>('');
  url$ = this.urlSubject.asObservable();

  setUrl(url: any) {
    this.urlSubject.next(url);
  }
}