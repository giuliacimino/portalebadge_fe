import { TestBed } from '@angular/core/testing';

import { AmbitoLavorativoService } from './ambito-lavorativo.service';

describe('AmbitoLavorativoService', () => {
  let service: AmbitoLavorativoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmbitoLavorativoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
