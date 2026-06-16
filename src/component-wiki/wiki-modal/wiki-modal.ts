import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ModalService } from '../../services/modal-service';
import { edificios } from '../../models/edificios.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WikiModalMap } from '../wiki-modal-map/wiki-modal-map';

@Component({
  template: `
        <div class="card flex justify-center">
            <!-- Definimos la tarjeta modal, hacemos un servicio para mostrar o no la ventana -->
            <!-- Header añadimos el titulo del modal -->
            <!-- [modal]="true" sirve para crear una capa oscura y bloquear interaccion externas -->
            <!-- [(visible)]="modalService.visible actua como booleno para saber el estado acual del modal y poder quitarlo si es false -->
            <!-- el style y los breakpoints son los tamaños -->
            <!-- Maximizable hace que podamos ampliar -->
            <!-- (onHide)="limpiarEdificio()" cuando se cierre limpia el objeto asignado del modal -->
            <!-- [focusOnShow]="false", si se carga algo mas abajo como mapa, imagenes etc, este bloquea para que no se redimensione el scroll -->
            <p-dialog header="{{ edificio?.name }}" [modal]="true" [(visible)]="modalService.visible" [style]="{ width: '50rem' }" [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }" [maximizable]="true" (onHide)="limpiarEdificio()" [focusOnShow]="false">
                <div class="grid grid-cols-4 gap-4 mb-6">
                    <div class="col-span-2 flex items-center">
                      <img [src]="edificio?.images?.exterior" alt="{{ edificio?.name }}" class="w-full h-auto rounded-lg shadow-md">
                    </div>
                    <div class="col-span-2 flex items-center">
                      <img [src]="edificio?.images?.interior" alt="{{ edificio?.name }}" class="w-full h-auto rounded-lg shadow-md">
                    </div>
                    <div class="col-span-2 flex items-center">
                       <p>
                        {{ edificio?.description }}
                    </p>
                    </div>
                    <div class="col-span-2 flex items-center justify-center">
                      <app-wiki-modal-map></app-wiki-modal-map>
                    </div>
                </div>
            </p-dialog>
        </div>
    `,
  selector: 'app-wiki-modal',
  imports: [ButtonModule, DialogModule, WikiModalMap],
  styleUrl: './wiki-modal.css',
})
export class WikiModal {

    // edificio variable
  edificio: edificios | null = null;
  
  // Inyectamos el servicio
  constructor(public modalService: ModalService) {
  this.modalService.url$
    .pipe(takeUntilDestroyed()) 
    .subscribe(data => {
      this.edificio = data;
    });
}

limpiarEdificio() {
  this.edificio = null;
}

}




