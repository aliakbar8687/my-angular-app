import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapBiPlatformComponent } from './sap-bi-platform.component';

describe('SapBiPlatformComponent', () => {
  let component: SapBiPlatformComponent;
  let fixture: ComponentFixture<SapBiPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SapBiPlatformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapBiPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
