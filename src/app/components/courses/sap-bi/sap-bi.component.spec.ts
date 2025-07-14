import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapBiComponent } from './sap-bi.component';

describe('SapBiComponent', () => {
  let component: SapBiComponent;
  let fixture: ComponentFixture<SapBiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SapBiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
