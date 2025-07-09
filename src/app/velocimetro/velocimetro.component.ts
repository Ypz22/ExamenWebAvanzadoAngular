import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-velocimetro',
  imports: [],
  templateUrl: './velocimetro.component.html',
  styleUrl: './velocimetro.component.css'
})
export class VelocimetroComponent {
  velocidad = signal(0);
  velocidadMinima = 0;

  colorFondo = signal('white');

  actualizarColorFondo() {
    const velocidadActual = this.velocidad();
    if (velocidadActual === 0) {
      this.colorFondo.set('white');
    } else if (velocidadActual < 30) {
      this.colorFondo.set('green');
    } else if (velocidadActual < 70) {
      this.colorFondo.set('yellow');
    } else if (velocidadActual < 120) {
      this.colorFondo.set('orange');
    } else {
      this.colorFondo.set('red');
    }
  }

  constructor() {
    effect(() => this.actualizarColorFondo());
  }


  acelerar() {
    this.velocidad.update(actual => actual + 5);
  }

  frenar() {
    if (this.velocidad() - 3 > this.velocidadMinima) {
      this.velocidad.update(actual => actual - 3);
    }
  }
  resetear() {
    this.velocidad.set(0);
  }

}
