import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {
constructor(private route:Router)
{

}
Navigate(component: string) {
  switch (component) {
      case 'Get_Menu':
          this.route.navigateByUrl('doc/Food/Get_Menu');
          break;
      case 'Get_All_Restaurants':
          this.route.navigateByUrl('doc/Food/Get_All_Restaurants');
          break;
      case 'Get_All_Food_Products':
          this.route.navigateByUrl('doc/Food/Get_All_Food_Products');
          break;
          case 'Get_All_Drink':
          this.route.navigateByUrl('doc/Food/Get_Drinks');
          break;
          case 'Get_all_FoodProducts_of_Category':
          this.route.navigateByUrl('doc/Food/Get_all_FoodProducts_of_Category');
          break;
          case 'Search_Food_Products':
          this.route.navigateByUrl('doc/Food/Search_Food_Products');
          break;
          case 'Add_a_FoodProduct':
          this.route.navigateByUrl('doc/Food/Add_a_FoodProduct');
          break;
          case 'Update_a_FoodProduct':
          this.route.navigateByUrl('doc/Food/Update_a_FoodProduct');
          break;
          case 'Delete_a_FoodProduct':
          this.route.navigateByUrl('doc/Food/Delete_a_FoodProduct');
          break;

      default:
          break;
  }
}

}
