import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBoxComponent } from './landing-box.component';

describe('LandingBoxComponent', () => {
  let component: LandingBoxComponent;
  let fixture: ComponentFixture<LandingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
