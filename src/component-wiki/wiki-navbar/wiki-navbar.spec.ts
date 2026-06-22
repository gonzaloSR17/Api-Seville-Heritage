import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiNavbar } from './wiki-navbar';

describe('WikiNavbar', () => {
  let component: WikiNavbar;
  let fixture: ComponentFixture<WikiNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WikiNavbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
