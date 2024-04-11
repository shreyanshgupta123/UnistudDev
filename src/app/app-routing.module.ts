import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './Components/firstpage/firstpage.component';
import { ApisComponent } from './Components/apis/apis.component';

const routes: Routes = [
  {
    path:'',component:FirstpageComponent
  },
  {
    path:'doc',component:ApisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
