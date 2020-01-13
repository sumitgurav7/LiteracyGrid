import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteracyTabularComponent } from './literacy-tabular.component';

describe('LiteracyTabularComponent', () => {
  let component: LiteracyTabularComponent;
  let fixture: ComponentFixture<LiteracyTabularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteracyTabularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteracyTabularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
