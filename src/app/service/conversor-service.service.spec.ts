import { TestBed } from '@angular/core/testing';

import { ConversorServiceService
 } from './conversor-service.service';
describe('ConversorServiceService', () => {
  let service: ConversorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
