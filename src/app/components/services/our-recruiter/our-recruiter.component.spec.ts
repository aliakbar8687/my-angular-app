import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurRecruiterComponent } from './our-recruiter.component';

describe('OurRecruiterComponent', () => {
  let component: OurRecruiterComponent;
  let fixture: ComponentFixture<OurRecruiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurRecruiterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
