import { TestBed } from '@angular/core/testing';

import { ChangepinService } from './changepin.service';

describe('ChangepinService', () => {
  let service: ChangepinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangepinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
