import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { HeaderComponent } from '../core/header/header.component';
import { FooterComponent } from '../core/footer/footer.component';
import { MainPageComponent } from '../main-page/main-page.component';
const routes: Routes =[
  {
    path:'',
    component:MainPageComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
      RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class RouteModule { }
