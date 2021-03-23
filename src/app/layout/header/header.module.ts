import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HeaderBurgerComponent } from './header-burger/header-burger.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderSearchComponent } from './header-search/header-search.component';


@NgModule({
  declarations: [
    HeaderBurgerComponent,
    HeaderMenuComponent,
    HeaderSearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FlexLayoutModule
  ],
  exports: [
    HeaderBurgerComponent,
    HeaderMenuComponent,
    HeaderSearchComponent,
  ]
})
export class HeaderModule { }
