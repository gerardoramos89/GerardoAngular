import { TestBed } from '@angular/core/testing';

import { RecargaService } from './recarga.service';

describe('RecargaService', () => {
  let service: RecargaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecargaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
