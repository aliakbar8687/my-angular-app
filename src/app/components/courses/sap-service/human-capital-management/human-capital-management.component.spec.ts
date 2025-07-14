import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanCapitalManagementComponent } from './human-capital-management.component';

describe('HumanCapitalManagementComponent', () => {
  let component: HumanCapitalManagementComponent;
  let fixture: ComponentFixture<HumanCapitalManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HumanCapitalManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanCapitalManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
