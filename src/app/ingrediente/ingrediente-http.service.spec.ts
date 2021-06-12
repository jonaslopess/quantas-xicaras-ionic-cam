import { TestBed } from '@angular/core/testing';

import { IngredienteHttpService } from './ingrediente-http.service';

describe('IngredienteHttpService', () => {
  let service: IngredienteHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredienteHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
