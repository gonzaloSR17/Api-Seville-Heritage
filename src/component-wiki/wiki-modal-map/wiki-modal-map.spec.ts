import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiModalMap } from './wiki-modal-map';

describe('WikiModalMap', () => {
  let component: WikiModalMap;
  let fixture: ComponentFixture<WikiModalMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiModalMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WikiModalMap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
