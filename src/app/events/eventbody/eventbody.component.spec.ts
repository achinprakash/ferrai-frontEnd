import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbodyComponent } from './eventbody.component';

describe('EventbodyComponent', () => {
  let component: EventbodyComponent;
  let fixture: ComponentFixture<EventbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
