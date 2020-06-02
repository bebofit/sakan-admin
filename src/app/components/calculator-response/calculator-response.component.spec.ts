import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorResponseComponent } from './calculator-response.component';

describe('CalculatorResponseComponent', () => {
  let component: CalculatorResponseComponent;
  let fixture: ComponentFixture<CalculatorResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
