import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Terp10Component } from './terp-10.component';

describe('Terp10Component', () => {
  let component: Terp10Component;
  let fixture: ComponentFixture<Terp10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Terp10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Terp10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
