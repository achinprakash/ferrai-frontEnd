import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroselSliderComponent } from './carosel-slider.component';

describe('CaroselSliderComponent', () => {
  let component: CaroselSliderComponent;
  let fixture: ComponentFixture<CaroselSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaroselSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaroselSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
