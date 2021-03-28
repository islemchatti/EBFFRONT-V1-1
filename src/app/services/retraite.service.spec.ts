import { TestBed } from '@angular/core/testing';

import { RetraiteService } from './retraite.service';

describe('RetraiteService', () => {
  let service: RetraiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetraiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
