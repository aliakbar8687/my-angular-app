import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapEventComponent } from './sap-event.component';

describe('SapEventComponent', () => {
  let component: SapEventComponent;
  let fixture: ComponentFixture<SapEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SapEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
