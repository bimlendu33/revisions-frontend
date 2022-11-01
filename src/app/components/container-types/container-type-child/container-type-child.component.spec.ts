import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTypeChildComponent } from './container-type-child.component';

describe('ContainerTypeChildComponent', () => {
  let component: ContainerTypeChildComponent;
  let fixture: ComponentFixture<ContainerTypeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerTypeChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerTypeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
