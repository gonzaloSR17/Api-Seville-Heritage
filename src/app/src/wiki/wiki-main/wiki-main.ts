import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef, inject } from '@angular/core';

@Component({
  selector: 'app-wiki-main',
  imports: [],
  templateUrl: './wiki-main.html',
  styleUrl: './wiki-main.css',
})
export class WikiMain implements OnInit {

  edificios: any[] = [];
  loadingWindow: boolean = true;
  errorWindow: boolean = false;

  // Dentro de tu clase:
  private cdr = inject(ChangeDetectorRef);

  apiURL: string = 'https://backend-api-seville-heritage.onrender.com/data?_page=1&_limit=15'


  ngOnInit(): void {
    this.obtenerCiudades();
  }

  // Funcion asincrona se ejecuta en segundo plano
  async obtenerCiudades() {
    try {
           
      // Almacenamos la respuesta del fetch
      const response = await fetch(this.apiURL);

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      // Convertimos la respuesta a JSON
      this.edificios = await response.json();

      this.loadingWindow = false;

      this.cdr.detectChanges();

    } catch (error) {
      console.error('Error al obtener las ciudades:', error);
      this.loadingWindow = false;
      this.errorWindow = true;
    }
  }

}
