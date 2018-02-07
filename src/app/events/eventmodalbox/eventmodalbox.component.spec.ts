import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventmodalboxComponent } from './eventmodalbox.component';

describe('EventmodalboxComponent', () => {
  let component: EventmodalboxComponent;
  let fixture: ComponentFixture<EventmodalboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventmodalboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventmodalboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
