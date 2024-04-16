import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApisComponent } from './Components/apis/apis.component';
import { FirstpageComponent } from './Components/firstpage/firstpage.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ECommerceComponent } from './Components/e-commerce/e-commerce.component';
import { UniversityComponent } from './Components/university/university.component';
import { FoodComponent } from './Components/food/food.component';
import { FoodGetmenuComponent } from './Components/food-getmenu/food-getmenu.component';
import { FoodGetallRestaurantsComponent } from './Components/food-getall-restaurants/food-getall-restaurants.component';


import { HttpClientModule } from '@angular/common/http';
import { AIChatbotComponent } from './Components/aichatbot/aichatbot.component';
import { GetDrinksComponent } from './Components/get-drinks/get-drinks.component';


@NgModule({
  declarations: [
    AppComponent,
    ApisComponent,
    FirstpageComponent,
    FooterComponent,
    ECommerceComponent,
    UniversityComponent,
    FoodComponent,
    FoodGetmenuComponent,
    FoodGetallRestaurantsComponent,
    AIChatbotComponent,
    GetDrinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
