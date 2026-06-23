import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ModalService } from '../../services/modal-service';

// Importamos leaflet
import * as L from 'leaflet'
import { edificios } from '../../models/edificios.model';
import { EdificioPoo } from '../../models/edificio.model';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-wiki-map',
  imports: [],
  templateUrl: './wiki-map.html',
  styleUrl: './wiki-map.css',
})
export class WikiMap implements AfterViewInit, OnInit {


    // Variable para cargar los objetos
    edificios: edificios[] = [];
    filtros: EdificioPoo = { q: '', architect: '', category: '', district: '' };
    lat : number = 0;
    lng: number = 0;

    // Definimos un diccionario para los marcadores
    private readonly iconosCategoria: Record<string, string> = {
      "Expo 92": "Expo92.png",
      "Expo 29": "Expo29.png",
      "Church": "church.svg", 
      "House": "house.svg",
      "Military": "military.svg"
    };

     private map!: L.Map;
    
      // Marcador
      private marker!: L.Marker;

      private markerGroup!: L.LayerGroup;
    
      // Imagen del marcador
      private icono: L.Icon = L.icon({
      iconUrl: 'location-pin-alt-1-svgrepo-com.svg', // Recomendación abajo
      iconSize: [50, 50],
      iconAnchor: [25, 50]
    });
    
      private initialized = false;
    
      constructor(public modalService: ModalService,
        private apiService: ApiService,
        private filter: FilterService

      ) {}

    ngOnInit(): void {
      this.obtenerCiudades();

    //al hacer un set en sidebar en wiki main da el aviso y ejecuta la funcion asignada
    // Aunque este en un ngOnInit si cambia se ejecuta
    this.filter.url$.subscribe(url => {
      if (url) {
        console.log("Ejecutando...")
        this.obtenerCiudadesDesdeUrl(url);
      } else {
        console.log('No se EJECUTO NADA');
        this.filtros = { q: '', architect: '', category: '', district: '' };
        //this.limpiarResultados();
        //this.obtenerCiudades(1);
      }
    })

    }

    ngAfterViewInit(): void {
      const container = document.getElementById('map');

      if (!container) return; 

      this.map = L.map(container).setView([37.3461, -5.9715], 19);
      
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap'
          }).addTo(this.map);
      
      this.markerGroup = L.layerGroup().addTo(this.map);
      
          // 3. Guardar referencia del marcador
          // this.marker = L.marker([37.3461, -5.9715], { icon: this.icono }).bindPopup("Soy un marcador SVG.").addTo(this.map);

          // Iteramos el objeto de filtros y lo agregamos a HttpParams()
          

      }

      // Funcion para cargar todos los edificios
      async obtenerCiudades() {
        // Nos suscribimos
        this.apiService.getEdificios(0, this.filtros).subscribe({
          next: (response) => {
            this.edificios = response.body || []; // Asignamos la respuesta al array de edificios, si no hay respuesta asignamos un array vacio

            this.edificios.forEach((e) => {
                if (e.location.lat && e.location.lng) {

                      this.marker = L.marker([e.location.lat, e.location.lng], { icon: this.elegirIcono(e.category) }).bindPopup(this.popUp(e)).addTo(this.markerGroup);
                    
                  }

            });
              
          } 
        })
      }


      elegirIcono (tipo: string) {
        
        // Recogemos el diccionario
        const imagen =  this.iconosCategoria[tipo]

        if(imagen) {
            return L.icon({
              iconUrl: imagen, // Recomendación abajo
              iconSize: [35, 35],
              iconAnchor: [17.5, 35]
           });
        }
        return this.icono
      }

      popUp (edificio: edificios){
        return L.popup().setContent(`
                <h5>${edificio.name}</h5>
                <br/>
                <div class="flex justify-center">
                  <img class="my-3" src="${edificio.images.exterior}" alt="${edificio.name}" style="width:300px; height:auto;"/>
                </div>
                <br/>
                <em>${edificio.address}</em>
                <p>${edificio.style}</p>
                `);
      }

    obtenerCiudadesDesdeUrl(url: EdificioPoo) {
      console.log('FILTRO MODIFICADO MAPA: ', url);

      // Agregamos el url
      this.filtros = url;
      
      // Limpiamos la funcion
      //this.limpiarResultados();

      // limpiamos los marcadores
      // 1. Crear el grupo una vez

      this.markerGroup.clearLayers();

      // Ejecutamos otra vez
      this.obtenerCiudades();

    }

    


    }
    
      //   this.modalService.url$.subscribe(data => {
    
      //     if (!data?.location) return;
    
      //     //  esperar a que el modal sea visible
      //     setTimeout(() => {
      //       this.initMap(data.location.lat, data.location.lng);
      //     }, 300);
      //   });
      // }
      

