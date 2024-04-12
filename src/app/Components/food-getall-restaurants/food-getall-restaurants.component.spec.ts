import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodGetallRestaurantsComponent } from './food-getall-restaurants.component';

describe('FoodGetallRestaurantsComponent', () => {
  let component: FoodGetallRestaurantsComponent;
  let fixture: ComponentFixture<FoodGetallRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodGetallRestaurantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodGetallRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
