import { TestBed, inject } from '@angular/core/testing';

import { HselectionService } from './hselection.service';

describe('HselectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HselectionService]
    });
  });

  it('should ...', inject([HselectionService], (service: HselectionService) => {
    expect(service).toBeTruthy();
  }));
});
