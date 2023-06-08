import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pto1AComponent } from './pto1-a.component';

describe('Pto1AComponent', () => {
  let component: Pto1AComponent;
  let fixture: ComponentFixture<Pto1AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pto1AComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pto1AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
