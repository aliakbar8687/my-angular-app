import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapCloudsSolutionComponent } from './sap-clouds-solution.component';

describe('SapCloudsSolutionComponent', () => {
  let component: SapCloudsSolutionComponent;
  let fixture: ComponentFixture<SapCloudsSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SapCloudsSolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapCloudsSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
