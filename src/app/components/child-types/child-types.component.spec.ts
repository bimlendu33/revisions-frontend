import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTypesComponent } from './child-types.component';

describe('ChildTypesComponent', () => {
  let component: ChildTypesComponent;
  let fixture: ComponentFixture<ChildTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
