import { AfterViewInit ,Component } from '@angular/core';

// Importamos leaflet
import * as L from 'leaflet'

// Importacion del servicios del objeto
import { edificios } from '../../models/edificios.model';
import { ModalService } from '../../services/modal-service';


@Component({
  selector: 'app-wiki-modal-map',
  imports: [],
  templateUrl: './wiki-modal-map.html',
  styleUrl: './wiki-modal-map.css',
})
export class WikiModalMap {

  private map!: L.Map;

  // Marcador
  private marker!: L.Marker;

  // Imagen del marcador
  private icono: L.Icon = L.icon({
  iconUrl: 'location-pin-alt-1-svgrepo-com.svg', // Recomendación abajo
  iconSize: [50, 50],
  iconAnchor: [25, 50]
});

  private initialized = false;

  constructor(public modalService: ModalService) {

    this.modalService.url$.subscribe(data => {

      if (!data?.location) return;

      //  esperar a que el modal sea visible
      setTimeout(() => {
        this.initMap(data.location.lat, data.location.lng);
      }, 300);
    });
  }

  private initMap(lat: number, lng: number) {

    const container = document.getElementById('map');
    if (!container) return; 

    if (this.map) {
      this.map.setView([lat, lng], 19);
      this.marker.setLatLng([lat, lng]);
      this.map.invalidateSize();
      return;
    } else {
      // Inicializacion por primera vez, aqui es donde creo el mapa la primera vez abierto el modal

    this.map = L.map(container).setView([lat, lng], 19);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    // 3. Guardar referencia del marcador
    this.marker = L.marker([lat, lng], { icon: this.icono }).bindPopup("Soy un marcador SVG.").addTo(this.map);
    }

    // Marcador
    // L.marker([lat, lng]).addTo(this.map);
  }
}
