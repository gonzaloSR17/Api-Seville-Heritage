import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterLink],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main implements AfterViewInit{
  @ViewChild('bgVideo') videoElement!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    if (this.videoElement) {
      // Cogemos el elemnto nativo
      const video = this.videoElement.nativeElement;

      // Aseguramos el silenciado por código (truco para saltar bloqueos)
      video.muted = true;

      // reproducimos
      video.play().catch(error => {
        console.log("El navegador bloqueó el autoplay inicial, esperando interacción:", error);
      });

    }
  }
}

