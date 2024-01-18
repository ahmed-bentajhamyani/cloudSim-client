import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudletFormComponent } from './cloudlet-form.component';

describe('CloudletFormComponent', () => {
  let component: CloudletFormComponent;
  let fixture: ComponentFixture<CloudletFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudletFormComponent]
    });
    fixture = TestBed.createComponent(CloudletFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
