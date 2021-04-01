import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { ReviewListComponent } from './review-list/review-list.component';



@NgModule({
  declarations: [
    HomepageComponent,
    CarouselComponent,
    MenuListComponent,
    ReviewListComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
