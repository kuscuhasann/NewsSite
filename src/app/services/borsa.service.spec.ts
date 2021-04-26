/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BorsaService } from './borsa.service';

describe('Service: Borsa', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BorsaService]
    });
  });

  it('should ...', inject([BorsaService], (service: BorsaService) => {
    expect(service).toBeTruthy();
  }));
});
