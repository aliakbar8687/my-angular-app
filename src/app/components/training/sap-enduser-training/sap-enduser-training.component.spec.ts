import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapEnduserTrainingComponent } from './sap-enduser-training.component';

describe('SapEnduserTrainingComponent', () => {
  let component: SapEnduserTrainingComponent;
  let fixture: ComponentFixture<SapEnduserTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SapEnduserTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapEnduserTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
