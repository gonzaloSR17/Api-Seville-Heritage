import { Component, AfterViewInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wiki-sidebar',
  imports: [FormsModule],
  templateUrl: './wiki-sidebar.html',
  styleUrl: './wiki-sidebar.css',
})
export class WikiSidebar{

  button: HTMLButtonElement | null = null;

  // Usaremos estas variables como NgModel, almacenamos las etiquetas HTML asi
  searchText: string = '';
  architectText: string = '';
  categoryText: string = '';
  districtText: string = '';

  url: string = '';

  formarFiltro() {

      // Almacenamos la url 
      this.url = 'https://backend-api-seville-heritage.onrender.com/data?_page=1&_limit=15';
       
      // Verificamos si el valor de cada filtro no esta vacio y lo añadimos a la url
      if (this.searchText) {
        this.url += '&q=' + encodeURIComponent(this.searchText);
       }

      if (this.architectText) {
      this.url += '&architect=' + this.architectText;
      }

      if (this.categoryText) {
      this.url += '&category=' + this.categoryText;
      }
      if (this.districtText) {
      this.url += '&district=' + this.districtText;
      }

      console.log(this.url);

    }
}

// OPTIMIZACION

// const params = new URLSearchParams();

// if (this.searchText) params.append('q', this.searchText);
// if (this.architectText) params.append('architect', this.architectText);
// if (this.categoryText) params.append('category', this.categoryText);
// if (this.districtText) params.append('district', this.districtText);

// this.url = `https://backend-api-seville-heritage.onrender.com/data?_page=1&_limit=15&${params.toString()}`;


