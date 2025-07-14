import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCycleComponent } from './training-cycle.component';

describe('TrainingCycleComponent', () => {
  let component: TrainingCycleComponent;
  let fixture: ComponentFixture<TrainingCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainingCycleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
