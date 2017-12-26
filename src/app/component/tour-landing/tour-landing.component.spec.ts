import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourLandingComponent } from './tour-landing.component';

describe('TourLandingComponent', () => {
  let component: TourLandingComponent;
  let fixture: ComponentFixture<TourLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
