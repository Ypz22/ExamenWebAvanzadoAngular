import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VelocimetroComponent } from './velocimetro/velocimetro.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VelocimetroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Yepez_Jefferson_Ex2';
}
