import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapHanaComponent } from './sap-hana.component';

describe('SapHanaComponent', () => {
  let component: SapHanaComponent;
  let fixture: ComponentFixture<SapHanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SapHanaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapHanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
