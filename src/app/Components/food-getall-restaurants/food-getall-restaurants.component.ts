import { Component } from '@angular/core';
import { FoodService } from '../../Service/food.service';

@Component({
  selector: 'app-food-getall-restaurants',
  templateUrl: './food-getall-restaurants.component.html',
  styleUrl: './food-getall-restaurants.component.scss'
})
export class FoodGetallRestaurantsComponent {

  apiUrl: string = 'https://url-backendapi.onrender.com/food_get_all_restaurant';
  menuData: any = [];
items: any;

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.copyToClipboard();
  }

  copyToClipboard(): void {
    // Copy text to clipboard
    const el = document.createElement('textarea');
    el.value = this.apiUrl;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    console.log(this.foodService.getMenuData())

  }
}
