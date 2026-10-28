import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAstrologyConsultation } from './live-astrology-consultation';

describe('LiveAstrologyConsultation', () => {
  let component: LiveAstrologyConsultation;
  let fixture: ComponentFixture<LiveAstrologyConsultation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveAstrologyConsultation],
    }).compileComponents();

    fixture = TestBed.createComponent(LiveAstrologyConsultation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
