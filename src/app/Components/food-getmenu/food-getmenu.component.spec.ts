import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodGetmenuComponent } from './food-getmenu.component';

describe('FoodGetmenuComponent', () => {
  let component: FoodGetmenuComponent;
  let fixture: ComponentFixture<FoodGetmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodGetmenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodGetmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
