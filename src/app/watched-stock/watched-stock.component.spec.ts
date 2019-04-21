import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchedStockComponent } from './watched-stock.component';

describe('WatchedStockComponent', () => {
  let component: WatchedStockComponent;
  let fixture: ComponentFixture<WatchedStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchedStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchedStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
