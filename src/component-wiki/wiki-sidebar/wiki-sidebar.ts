import { Component, AfterViewInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-wiki-sidebar',
  imports: [FormsModule],
  templateUrl: './wiki-sidebar.html',
  styleUrl: './wiki-sidebar.css',
})


export class WikiSidebar{

  // Importamos el servicio de Inyeccion para la comunicación de los modulos, asi puedo pasar variables entre si
  constructor(private filterService: FilterService) {}

  button: HTMLButtonElement | null = null;

  // El objeto que se vincula directamente al HTML
  filters = {
    q: '',
    architect: '',
    category: '',
    district: ''
  };

  url: string = '';

  formarFiltro() {
      // Creamos un nuevo elemento URLSearchParams() asi evitamos concatenar strings manualmente;
      const params = new URLSearchParams();

      // Foreach que recorra los que tenga un valor
      Object.entries(this.filters).forEach(([key, value]) => {
        // Si el valor no es vacío y no es 'Todos', lo añadimos
        if (value && value !== 'Todos') {
          params.append(key, value); // append funcion interna de URLSearchParams para concatenar
      }
      });

      this.filterService.setUrl(params.toString());

    }

    // Funcion para limpiar el formulario
    limpiarResultados() {
      this.filters = { q: '', architect: '', category: '', district: '' };
      this.filterService.setUrl('');
    }
}


// OPTIMIZACION
