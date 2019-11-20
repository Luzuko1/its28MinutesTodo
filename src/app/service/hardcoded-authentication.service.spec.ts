import { TestBed } from '@angular/core/testing';

import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

describe('HardcoedAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardcodedAuthenticationService = TestBed.get(HardcodedAuthenticationService);
    expect(service).toBeTruthy();
  });
});
