import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessFactorComponent } from './success-factor.component';

describe('SuccessFactorComponent', () => {
  let component: SuccessFactorComponent;
  let fixture: ComponentFixture<SuccessFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccessFactorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
