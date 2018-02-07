import { TestBed, inject } from '@angular/core/testing';

import { FerrariService } from './ferrari.service';

describe('FerrariService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FerrariService]
    });
  });

  it('should be created', inject([FerrariService], (service: FerrariService) => {
    expect(service).toBeTruthy();
  }));
});
