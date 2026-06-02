import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEnd } from './main-end';

describe('MainEnd', () => {
  let component: MainEnd;
  let fixture: ComponentFixture<MainEnd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainEnd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainEnd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
