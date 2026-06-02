import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiSidebar } from './wiki-sidebar';

describe('WikiSidebar', () => {
  let component: WikiSidebar;
  let fixture: ComponentFixture<WikiSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WikiSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
