import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiFilterMobile } from './wiki-filter-mobile';

describe('WikiFilterMobile', () => {
  let component: WikiFilterMobile;
  let fixture: ComponentFixture<WikiFilterMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiFilterMobile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WikiFilterMobile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
