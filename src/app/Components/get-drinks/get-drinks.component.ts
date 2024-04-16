import { Component } from '@angular/core';
import { FoodService } from '../../Service/food.service';

@Component({
  selector: 'app-get-drinks',
  templateUrl: './get-drinks.component.html',
  styleUrl: './get-drinks.component.scss'
})
export class GetDrinksComponent {
  apiUrl: string = 'https://url-backendapi.onrender.com/food_get_menu';
  menuData: any = [];
items: any;
showclicksign:boolean=false
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.copyToClipboard(); // Call the method to copy URL and fetch data
  }

  copyToClipboard(): void {
    // Copy text to clipboard
    const el = document.createElement('textarea');
    el.value = this.apiUrl;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

  }
  
}
