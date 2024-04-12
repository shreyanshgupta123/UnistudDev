import { Component } from '@angular/core';

@Component({
  selector: 'app-food-getall-food-products',
  templateUrl: './food-getall-food-products.component.html',
  styleUrl: './food-getall-food-products.component.scss'
})
export class FoodGetallFoodProductsComponent {
  displayjson:any=`[
    {
    "id": 1,
    "name": "shreyansh",
    "Designation": "FrontEnd Developer"
    },
    {
    "id": 2,
    "name": "Aman",
    "Designation": "RPA Developer"
    },
    {
    "id": 3,
    "name": "Aman",
    "Designation": "FrontEnd Developer"
    }
    ]`

}
