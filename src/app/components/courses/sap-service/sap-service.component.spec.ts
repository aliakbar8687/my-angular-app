import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapServiceComponent } from './sap-service.component';

describe('SapServiceComponent', () => {
  let component: SapServiceComponent;
  let fixture: ComponentFixture<SapServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SapServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
