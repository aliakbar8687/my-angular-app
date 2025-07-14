import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapProjectGoLiveComponent } from './sap-project-go-live.component';

describe('SapProjectGoLiveComponent', () => {
  let component: SapProjectGoLiveComponent;
  let fixture: ComponentFixture<SapProjectGoLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SapProjectGoLiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapProjectGoLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
