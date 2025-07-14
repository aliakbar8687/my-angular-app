import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapInternshipComponent } from './sap-internship.component';

describe('SapInternshipComponent', () => {
  let component: SapInternshipComponent;
  let fixture: ComponentFixture<SapInternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SapInternshipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
