import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAnalyzeComponent } from './stock-analyze.component';

describe('StockAnalyzeComponent', () => {
  let component: StockAnalyzeComponent;
  let fixture: ComponentFixture<StockAnalyzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockAnalyzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockAnalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
