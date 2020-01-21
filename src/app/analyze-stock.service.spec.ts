import { TestBed } from '@angular/core/testing';

import { AnalyzeStockService } from './services/analyze-stock.service';

describe('AnalyzeStockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalyzeStockService = TestBed.get(AnalyzeStockService);
    expect(service).toBeTruthy();
  });
});
