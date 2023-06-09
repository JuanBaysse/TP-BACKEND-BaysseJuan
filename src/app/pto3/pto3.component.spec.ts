import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pto3Component } from './pto3.component';

describe('Pto3Component', () => {
  let component: Pto3Component;
  let fixture: ComponentFixture<Pto3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pto3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pto3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
