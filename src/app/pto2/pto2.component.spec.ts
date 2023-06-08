import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pto2Component } from './pto2.component';

describe('Pto2Component', () => {
  let component: Pto2Component;
  let fixture: ComponentFixture<Pto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pto2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
