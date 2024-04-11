import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApisComponent } from './Components/apis/apis.component';
import { FirstpageComponent } from './Components/firstpage/firstpage.component';


@NgModule({
  declarations: [
    AppComponent,
    ApisComponent,
    FirstpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
