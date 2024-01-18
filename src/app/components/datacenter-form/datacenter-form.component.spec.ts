import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacenterFormComponent } from './datacenter-form.component';

describe('DatacenterFormComponent', () => {
  let component: DatacenterFormComponent;
  let fixture: ComponentFixture<DatacenterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatacenterFormComponent]
    });
    fixture = TestBed.createComponent(DatacenterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
