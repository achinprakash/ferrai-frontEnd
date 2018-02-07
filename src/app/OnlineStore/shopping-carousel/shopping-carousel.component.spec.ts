import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCarouselComponent } from './shopping-carousel.component';

describe('ShoppingCarouselComponent', () => {
  let component: ShoppingCarouselComponent;
  let fixture: ComponentFixture<ShoppingCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
