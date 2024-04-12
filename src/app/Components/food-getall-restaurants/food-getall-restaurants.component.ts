import { Component } from '@angular/core';

@Component({
  selector: 'app-food-getall-restaurants',
  templateUrl: './food-getall-restaurants.component.html',
  styleUrl: './food-getall-restaurants.component.scss'
})
export class FoodGetallRestaurantsComponent {

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
