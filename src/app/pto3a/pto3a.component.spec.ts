import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pto3aComponent } from './pto3a.component';

describe('Pto3aComponent', () => {
  let component: Pto3aComponent;
  let fixture: ComponentFixture<Pto3aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pto3aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pto3aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
