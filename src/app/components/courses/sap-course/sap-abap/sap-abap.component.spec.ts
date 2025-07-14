import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapAbapComponent } from './sap-abap.component';

describe('SapAbapComponent', () => {
  let component: SapAbapComponent;
  let fixture: ComponentFixture<SapAbapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SapAbapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapAbapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
