import { TestBed } from '@angular/core/testing';

import { SubmitdataService } from './submitdata.service';

describe('SubmitdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubmitdataService = TestBed.get(SubmitdataService);
    expect(service).toBeTruthy();
  });
});
