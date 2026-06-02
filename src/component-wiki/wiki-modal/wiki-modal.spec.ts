import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiModal } from './wiki-modal';

describe('WikiModal', () => {
  let component: WikiModal;
  let fixture: ComponentFixture<WikiModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WikiModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
