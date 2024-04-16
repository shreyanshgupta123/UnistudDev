import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './Components/firstpage/firstpage.component';
import { ApisComponent } from './Components/apis/apis.component';
import { ECommerceComponent } from './Components/e-commerce/e-commerce.component';
import { UniversityComponent } from './Components/university/university.component';
import { FoodComponent } from './Components/food/food.component';
import { FoodGetmenuComponent } from './Components/food-getmenu/food-getmenu.component';

import { FoodGetallRestaurantsComponent } from './Components/food-getall-restaurants/food-getall-restaurants.component';
import { AIChatbotComponent } from './Components/aichatbot/aichatbot.component';
import { GetDrinksComponent } from './Components/get-drinks/get-drinks.component';


const routes: Routes = [
  {
    path:'',component:FirstpageComponent
  },
  {
    path:'chatbot',component:AIChatbotComponent
  },
  {
    path:'doc',component:ApisComponent
  },
  {
    path:'doc/Ecommerce',component:ECommerceComponent
  },
  {
    path:'doc/University',component:UniversityComponent
  },
  {
    path:'doc/Food',component:FoodComponent
  },
  {
    path:'doc/Food/Get_Menu',component:FoodGetmenuComponent
  },
  {
path:'doc/Food/Get_Drinks',component:GetDrinksComponent
  },
  {
    path:'doc/Food/Get_All_Restaurants',component:FoodGetallRestaurantsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
