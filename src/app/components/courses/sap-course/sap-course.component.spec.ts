import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapCourseComponent } from './sap-course.component';

describe('SapCourseComponent', () => {
  let component: SapCourseComponent;
  let fixture: ComponentFixture<SapCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SapCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
