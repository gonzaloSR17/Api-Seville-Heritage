import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from '../component-main/main/main';
import { MainInfo } from '../component-main/main-info/main-info';
import { MainEnd } from '../component-main/main-end/main-end';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Main, MainInfo, MainEnd],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Sevilla-Historica');
}
