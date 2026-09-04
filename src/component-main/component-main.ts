import { Component } from '@angular/core';
import { Main } from './main/main';
import { MainInfo } from './main-info/main-info';
import { MainEnd } from './main-end/main-end';
import { MainChatBot } from './main-chat-bot/main-chat-bot';

@Component({
  selector: 'app-component-main',
  imports: [Main, MainInfo, MainEnd, MainChatBot],
  templateUrl: './component-main.html',
  styleUrl: './component-main.css',
})
export class ComponentMain {

}
