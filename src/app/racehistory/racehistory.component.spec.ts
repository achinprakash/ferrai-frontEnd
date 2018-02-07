import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacehistoryComponent } from './racehistory.component';

describe('RacehistoryComponent', () => {
  let component: RacehistoryComponent;
  let fixture: ComponentFixture<RacehistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacehistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
