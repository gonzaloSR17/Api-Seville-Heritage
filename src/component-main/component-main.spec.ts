import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMain } from './component-main';

describe('ComponentMain', () => {
  let component: ComponentMain;
  let fixture: ComponentFixture<ComponentMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
