import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Racehistory1Component } from './racehistory1.component';

describe('Racehistory1Component', () => {
  let component: Racehistory1Component;
  let fixture: ComponentFixture<Racehistory1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Racehistory1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Racehistory1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
