import { Component, AfterViewInit, Input } from '@angular/core';
import { WikiMain } from '../wiki-main/wiki-main';

@Component({
  selector: 'app-wiki-sidebar',
  imports: [WikiMain],
  templateUrl: './wiki-sidebar.html',
  styleUrl: './wiki-sidebar.css',
})
export class WikiSidebar implements AfterViewInit{

  button: HTMLButtonElement | null = null;
  @Input() WikiMain!: WikiMain;

  ngAfterViewInit() {
  this.button = document.getElementById('search-button') as HTMLButtonElement | null;

  this.button?.addEventListener('click', () => {
    console.log('clicked');
    
    // Cambiamos el valor a true
    if (this.WikiMain) {
      this.WikiMain.filtrar = true;

      console.log(this.WikiMain.filtrar)
      
      // Es vital llamar a la función de búsqueda después de activar el filtro
      // para que se actualicen los datos inmediatamente
      this.WikiMain.obtenerCiudades(1);
    } else {
      console.log("no entro")
    }
  });
}

  // Dejamos las variables de String vacias

  searchText: String = '';
  yearText: String = '';
  archietText: String = '';
  categoryText: String = '';
  districtText: String = '';

  // Buscamos el boton del formulario en el html

  

  // Haremos las busquedas generales con: https://backend-api-seville-heritage.onrender.com/data?q=Aníbal




}
