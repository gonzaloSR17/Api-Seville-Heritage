import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef, inject } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { ApiService } from '../../services/api.service';
import { EdificioPoo } from '../../models/edificio.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-wiki-main',
  imports: [NgClass],
  templateUrl: './wiki-main.html',
  styleUrl: './wiki-main.css',
})
export class WikiMain implements OnInit {

   // Importamos el servicio de Inyeccion para la comunicación de los modulos
  constructor(
    private filterService: FilterService,
    private apiService: ApiService
  ) {}

  // Variable para almacenar los edificios obtenidos de la API, Ventana de error y de carga
  edificios: any[] = [];
  loadingWindow: boolean = true;
  errorWindow: boolean = false;

  // Contador auxiliares y almacenamiento del link
  totalPages = 0;
  countPage = 1;
  pages: number[] = [];
  filtros: EdificioPoo = { q: '', architect: '', category: '', district: '' };
  api_url = 'https://backend-api-seville-heritage.onrender.com/data?';

  // boolean para asigar los resultados de los botones
  filtrarBotonResul: boolean = false;

  // Refrescar cambios
  private cdr = inject(ChangeDetectorRef);

  // (Nada mas que se inicie ejecutame esta funcion)
  // Tambien escucha evento si cambia ejecuta el evento
  ngOnInit(): void {
    this.obtenerCiudades(1);

    //al hacer un set en sidebar en wiki main da el aviso y ejecuta la funcion asignada
    // Aunque este en un ngOnInit si cambia se ejecuta
    this.filterService.url$.subscribe(url => {
    if (url) {
      this.obtenerCiudadesDesdeUrl(url);
    } else {
      console.log('No hay filtro aplicado');
      this.filtros = { q: '', architect: '', category: '', district: '' };
      this.limpiarResultados();
      this.obtenerCiudades(1);
    }
  });
  }

  // Funcion asincrona se ejecuta en segundo plano
  async obtenerCiudades(numero: number) {
    this.loadingWindow = true;
    this.countPage = numero;

    // Ejecutamos el servicio HTTParams, subscribe para recibir la respuesta y asignarla a edificios, ademas de contar el total de paginas
    this.apiService.getEdificios(this.countPage, this.filtros).subscribe({
      next: (response) => {
        // Recogemos el x-total-count del header
        const total = Number(response.headers.get('x-total-count'))
        this.totalPages = Math.ceil(total / 15); // Calculamos el total de paginas, diviendo el total entre 15, ceil es division
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1); // Creamos un array con el numero de paginas, hacemos un foreach para sumar +1 para hacer un indice mas adecuado
      
        this.edificios = response.body || []; // Asignamos la respuesta al array de edificios, si no hay respuesta asignamos un array vacio
        this.loadingWindow = false;
        this.reestablecerVista(); // ScrollTop Hacia arriba
      },
      error: (err) => {
        console.error('Error al obtener las ciudades:', err);
        this.loadingWindow = false;
        this.errorWindow = true;
      }
    });
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

   obtenerCiudadesDesdeUrl(url: EdificioPoo) {
    console.log('FILTRO MODIFICADO: ', url);

    // Agregamos el url
    this.filtros = url;
    
    // Limpiamos la funcion
    this.limpiarResultados();

    this.obtenerCiudades(1);

  }

  siguienteApartado(){
    if (this.countPage < this.totalPages) {
      this.countPage++;
      this.obtenerCiudades(this.countPage);
    }
    
  }
  
  anteriorApartado() {
    if (this.countPage > 1) {
      this.countPage--;
      this.obtenerCiudades(this.countPage);
    }
  }

  reestablecerVista() {
    this.cdr.detectChanges();
    window.scrollTo({
    top: 0,
    behavior: "smooth",
    });
  }

}


// CODIGO ANTIGUO
  // Funcion asincrona se ejecuta en segundo plano
  // async obtenerCiudades(numero: number) {
  //   try {

  //     console.log('Aplicando a: ', `https://backend-api-seville-heritage.onrender.com/data?_page=${this.countPage}&_limit=15&${this.filtros}`);

  //     this.countPage = numero;

  //     // Almacenamos la respuesta del fetch
  //     const response = await fetch( `https://backend-api-seville-heritage.onrender.com/data?_page=${this.countPage}&_limit=15&${this.filtros}` );

  //     // Verificamos si hay error, si lo hay lanzamos throw
  //     if (!response.ok) {
  //       throw new Error(`Error HTTP: ${response.status}`);
  //     }

  //     // Contamos el total y lo dividimos en 15 paginas
  //     const total = Number(response.headers.get('x-total-count'));
  //     this.totalPages = Math.ceil(total / 15);
  //     this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);

  //     // Convertimos la respuesta a JSON, hacemos desaparecer la ventana de carga + refrescamos los cambios
  //     this.edificios = await response.json();
  //     this.loadingWindow = false;
  //     this.cdr.detectChanges();

  //     // Movemos la vista desde arriba
  //     this.reestablecerVista();

  //   } catch (error) {
  //     console.error('Error al obtener las ciudades:', error);
  //     this.loadingWindow = false;
  //     this.errorWindow = true;
  //   }
  // }