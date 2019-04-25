import { TestBed } from '@angular/core/testing';

import { FormloadService } from './formload.service';

describe('FormloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormloadService = TestBed.get(FormloadService);
    expect(service).toBeTruthy();
  });
});
