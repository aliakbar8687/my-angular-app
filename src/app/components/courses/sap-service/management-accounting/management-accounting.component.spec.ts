import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementAccountingComponent } from './management-accounting.component';

describe('ManagementAccountingComponent', () => {
  let component: ManagementAccountingComponent;
  let fixture: ComponentFixture<ManagementAccountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagementAccountingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
