import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteracyChartComponent } from './literacy-chart.component';

describe('LiteracyChartComponent', () => {
  let component: LiteracyChartComponent;
  let fixture: ComponentFixture<LiteracyChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteracyChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteracyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
