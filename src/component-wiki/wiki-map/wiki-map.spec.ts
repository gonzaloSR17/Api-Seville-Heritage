import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiMap } from './wiki-map';

describe('WikiMap', () => {
  let component: WikiMap;
  let fixture: ComponentFixture<WikiMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WikiMap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
