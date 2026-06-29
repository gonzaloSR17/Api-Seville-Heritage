import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EdificioPoo } from '../models/edificio.model';

@Injectable({ providedIn: 'root' })
export class FilterService {


  formarFiltro(edificio: EdificioPoo) {
      // Filtamos los valores vacios y los agregamos a una variable objetos
      const filtrosActivos = Object.fromEntries(
        // Object Entries asignamos a cada clave su valor y lo convertimos en un array de pares [clave, valor]
        Object.entries(edificio).filter(([key, value]) => value && value !== 'Todos' && value !== 'Categoria') // Si valor existe y no es igual a todos
      );

      this?.setUrl(edificio);
    }

  // Variable para almacenar la url del filtro  
  private urlSubject = new BehaviorSubject<EdificioPoo | null>(null);
  url$ = this.urlSubject.asObservable();

  setUrl(url: EdificioPoo) {
    this.urlSubject.next(url);
  }

  // Limpiar los filtros para que vuelva todo como estaba antes
  limpiarFiltros(edificio: EdificioPoo){
    this.setUrl(edificio);
  }
}