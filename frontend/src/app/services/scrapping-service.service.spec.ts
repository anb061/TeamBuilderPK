import { TestBed } from '@angular/core/testing';

import { ScrappingServiceService } from './scrapping-service.service';

describe('ScrappingServiceService', () => {
  let service: ScrappingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrappingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
