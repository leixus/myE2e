import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingOrderComponent } from './shoping-order.component';

describe('ShopingOrderComponent', () => {
  let component: ShopingOrderComponent;
  let fixture: ComponentFixture<ShopingOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
