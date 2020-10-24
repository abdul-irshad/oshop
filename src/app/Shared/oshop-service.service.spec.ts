import { TestBed } from '@angular/core/testing';

import { OshopServiceService } from './oshop-service.service';

describe('OshopServiceService', () => {
  let service: OshopServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OshopServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
