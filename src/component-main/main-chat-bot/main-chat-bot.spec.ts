import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChatBot } from './main-chat-bot';

describe('MainChatBot', () => {
  let component: MainChatBot;
  let fixture: ComponentFixture<MainChatBot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainChatBot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainChatBot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
