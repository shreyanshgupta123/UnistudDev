import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodGetallFoodProductsComponent } from './food-getall-food-products.component';

describe('FoodGetallFoodProductsComponent', () => {
  let component: FoodGetallFoodProductsComponent;
  let fixture: ComponentFixture<FoodGetallFoodProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodGetallFoodProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodGetallFoodProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
