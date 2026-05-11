import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainEnd } from '../main-end/main-end';
import { MainInfo } from '../main-info/main-info';

@Component({
  selector: 'app-main',
  imports: [RouterLink, MainEnd, MainInfo],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

}
