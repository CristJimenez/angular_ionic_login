import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isLogguedGuard } from './is-loggued-guard';

describe('isLogguedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isLogguedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
