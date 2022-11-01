import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTypesComponent } from './container-types.component';

describe('ContainerTypesComponent', () => {
  let component: ContainerTypesComponent;
  let fixture: ComponentFixture<ContainerTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
