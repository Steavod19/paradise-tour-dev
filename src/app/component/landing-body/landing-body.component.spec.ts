import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBodyComponent } from './landing-body.component';

describe('LandingBodyComponent', () => {
  let component: LandingBodyComponent;
  let fixture: ComponentFixture<LandingBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
