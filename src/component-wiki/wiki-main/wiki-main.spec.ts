import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiMain } from './wiki-main';

describe('WikiMain', () => {
  let component: WikiMain;
  let fixture: ComponentFixture<WikiMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WikiMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
