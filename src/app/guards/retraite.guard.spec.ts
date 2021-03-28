import { TestBed } from '@angular/core/testing';

import { RetraiteGuard } from './retraite.guard';

describe('RetraiteGuard', () => {
  let guard: RetraiteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RetraiteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
