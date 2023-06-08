import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pto1Component } from './pto1.component';

describe('Pto1Component', () => {
  let component: Pto1Component;
  let fixture: ComponentFixture<Pto1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pto1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
