import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main-info',
  imports: [],
  templateUrl: './main-info.html',
  styleUrl: './main-info.css',
})

export class MainInfo implements AfterViewInit {

  //objeto 
  constructor(private el: ElementRef) {}
  
  ngAfterViewInit(): void {
    // Buscamos las etiqutas con la siguiente clase
    const elementos = this.el.nativeElement.querySelectorAll('.info-mg')
    
    // Iteramos sobre cada elemento encontrado
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          // Dejamos de observar el elemento para que la animación solo ocurra una vez
          observer.unobserve(entry.target);
          }
      });
    }, { threshold: 0.15 }); // El umbral de intersección puede ajustarse según sea necesario
  
      // Empezamos a vigilar cada uno de los elementos
     elementos.forEach((elemento: HTMLElement) => {
      observer.observe(elemento);
    });
  }
}
