import { TestBed } from '@angular/core/testing';

import { StockSymbolService } from './stock-symbol.service';

describe('StockSymbolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockSymbolService = TestBed.get(StockSymbolService);
    expect(service).toBeTruthy();
  });
});
