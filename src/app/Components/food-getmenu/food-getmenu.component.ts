import { Component } from '@angular/core';

@Component({
  selector: 'app-food-getmenu',
  templateUrl: './food-getmenu.component.html',
  styleUrl: './food-getmenu.component.scss'
})
export class FoodGetmenuComponent {

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
