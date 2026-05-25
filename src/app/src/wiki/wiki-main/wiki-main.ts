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

  edificios: any[] = [];
  loadingWindow: boolean = true;
  errorWindow: boolean = false;

  totalPages = 0;
  countPage = 1;
  pages: number[] = [];

  // Dentro de tu clase:
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.obtenerCiudades(12);
  }

  // Funcion asincrona se ejecuta en segundo plano
  async obtenerCiudades(numero: number) {
    try {

      this.countPage = numero;

      // Almacenamos la respuesta del fetch
      const response = await fetch('https://backend-api-seville-heritage.onrender.com/data?_page=' + this.countPage + '&_limit=15');

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      // Contamos el total y lo dividimos en 15 paginas
      const total = Number(response.headers.get('x-total-count'));
      this.totalPages = Math.ceil(total / 15);

      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      console.log("Paginas totales = ", this.pages)

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

  marcarPagina(numero: number) {
    if (numero == this.countPage) {
      return true
    } else {
      return false
    }
  }
}
