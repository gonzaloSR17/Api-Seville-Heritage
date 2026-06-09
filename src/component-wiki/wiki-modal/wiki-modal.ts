import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ModalService } from '../../services/modal-service';
import { edificios } from '../../models/edificios.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  template: `
        <div class="card flex justify-center">
            <!-- Definimos la tarjeta modal, hacemos un servicio para mostrar o no la ventana -->
            <p-dialog header="{{ edificio?.name }}" [modal]="true" [(visible)]="modalService.visible" [style]="{ width: '50rem' }" [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }" [maximizable]="true" (onHide)="limpiarEdificio()">
                <div class="grid grid-cols-4 gap-4 mb-6">
                    <div class="col-span-2 flex items-center">
                      <img [src]="edificio?.images?.exterior" alt="{{ edificio?.name }}" class="w-full h-auto rounded-lg shadow-md">
                    </div>
                    <div class="col-span-2 flex items-center">
                      <img [src]="edificio?.images?.interior" alt="{{ edificio?.name }}" class="w-full h-auto rounded-lg shadow-md">
                    </div>
                </div>
                <p>
                    {{ edificio?.description }}
                </p>
                
            </p-dialog>
        </div>
    `,
  selector: 'app-wiki-modal',
  imports: [ButtonModule, DialogModule],
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




