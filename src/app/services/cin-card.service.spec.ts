import { TestBed } from '@angular/core/testing';

import { CinCardService } from './cin-card.service';

describe('CinCardService', () => {
  let service: CinCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
