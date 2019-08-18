import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTradesComponent } from './past-trades.component';

describe('PastTradesComponent', () => {
  let component: PastTradesComponent;
  let fixture: ComponentFixture<PastTradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastTradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
