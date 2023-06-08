import { TestBed } from '@angular/core/testing';

import { Ticket.ServiceService } from './ticket.service.service';

describe('Ticket.ServiceService', () => {
  let service: Ticket.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ticket.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
