import { TestBed } from '@angular/core/testing';

import { ShriService } from './shri.service';

describe('ShriService', () => {
  let service: ShriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
