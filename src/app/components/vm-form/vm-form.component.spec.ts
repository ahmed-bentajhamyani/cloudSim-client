import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmFormComponent } from './vm-form.component';

describe('VmFormComponent', () => {
  let component: VmFormComponent;
  let fixture: ComponentFixture<VmFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VmFormComponent]
    });
    fixture = TestBed.createComponent(VmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
