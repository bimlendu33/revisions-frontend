import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherOrderFnComponent } from './higher-order-fn.component';

describe('HigherOrderFnComponent', () => {
  let component: HigherOrderFnComponent;
  let fixture: ComponentFixture<HigherOrderFnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HigherOrderFnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherOrderFnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
