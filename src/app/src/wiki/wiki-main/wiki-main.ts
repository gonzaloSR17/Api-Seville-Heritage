import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef, inject } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-wiki-main',
  imports: [NgClass],
  templateUrl: './wiki-main.html',
  styleUrl: './wiki-main.css',
})
export class WikiMain implements OnInit {

  // Variable para almacenar los edificios obtenidos de la API, Ventana de error y de carga
  edificios: any[] = [];
  loadingWindow: boolean = true;
  errorWindow: boolean = false;

  // Contador auxiliares y almacenamiento del link
  totalPages = 0;
  countPage = 1;
  pages: number[] = [];
  api_url = 'https://backend-api-seville-heritage.onrender.com/data?';

  // Refrescar cambios
  private cdr = inject(ChangeDetectorRef);

  // (Nada mas que se inicie ejecutame esta funcion)
  ngOnInit(): void {
    this.obtenerCiudades(1);
  }

  // Funcion asincrona se ejecuta en segundo plano
  async obtenerCiudades(numero: number) {
    try {

      this.countPage = numero;

      // Almacenamos la respuesta del fetch
      const response = await fetch( this.api_url + '_page=' + this.countPage + '&_limit=15');

      // Verificamos si hay error, si lo hay lanzamos throw
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      // Contamos el total y lo dividimos en 15 paginas
      const total = Number(response.headers.get('x-total-count'));
      this.totalPages = Math.ceil(total / 15);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);

      // Convertimos la respuesta a JSON, hacemos desaparecer la ventana de carga + refrescamos los cambios
      this.edificios = await response.json();
      this.loadingWindow = false;
      this.cdr.detectChanges();

    } catch (error) {
      console.error('Error al obtener las ciudades:', error);
      this.loadingWindow = false;
      this.errorWindow = true;
    }
  }

  // Funcion para limpiar los resultados
  limpiarResultados() {
    this.edificios = [];
    this.pages = [];
    this.cdr.detectChanges();
  }

  // Funcion [(NgClass)] para marcar la pagina actual
   marcarPagina(numero: number) {
    return numero == this.countPage
  }
}
