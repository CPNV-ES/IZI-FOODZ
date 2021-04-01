import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';


@NgModule({
  declarations: [
    HomepageComponent,
    MenuListComponent,
    ReviewListComponent,
    CarrouselComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    IvyCarouselModule
  ]
})
export class HomepageModule { }
