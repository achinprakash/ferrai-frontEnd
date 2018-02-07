import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacersImageComponent } from './racers-image.component';

describe('RacersImageComponent', () => {
  let component: RacersImageComponent;
  let fixture: ComponentFixture<RacersImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacersImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacersImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
