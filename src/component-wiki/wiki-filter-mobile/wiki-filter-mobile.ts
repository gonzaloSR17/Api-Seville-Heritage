import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterService } from '../../services/filter.service';
import { EdificioPoo } from '../../models/edificio.model';

@Component({
  selector: 'app-wiki-filter-mobile',
  imports: [FormsModule],
  templateUrl: './wiki-filter-mobile.html',
  styleUrl: './wiki-filter-mobile.css',
})
export class WikiFilterMobile {

  // Importamos el servicio de Inyeccion para la comunicación de los modulos, asi puedo pasar variables entre si
  constructor(private filterService: FilterService) {}

  // El objeto que se vincula directamente al HTML
  edificioFiltrado: EdificioPoo = {
    q: '',
    architect: '',
    category: '',
    district: ''
  };

  // Funcion para lanzar el filtro
  lanzarFiltro() {
    console.log(this.edificioFiltrado)
    this.filterService.formarFiltro(this.edificioFiltrado)
  }

  // Limpiar filtro
  limpiarFiltro() {
    this.edificioFiltrado = {
    q: '',
    architect: '',
    category: '',
    district: ''
  };

  this.filterService.limpiarFiltros(this.edificioFiltrado);
  }

}
