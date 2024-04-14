import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../Service/food.service';

@Component({
  selector: 'app-food-getmenu',
  templateUrl: './food-getmenu.component.html',
  styleUrls: ['./food-getmenu.component.scss'] // Corrected 'styleUrl' to 'styleUrls'
})
export class FoodGetmenuComponent implements OnInit {
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
