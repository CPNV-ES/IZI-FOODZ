import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderBurgerComponent } from './header/header-burger/header-burger.component';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';
import { HeaderSearchComponent } from './header/header-search/header-search.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FlexLayoutModule
  ],
  exports: [
    MainLayoutComponent,
  ],
  declarations: [
    MainLayoutComponent,
    HeaderBurgerComponent,
    HeaderMenuComponent,
    HeaderSearchComponent,
    TitleComponent,
    FooterComponent,

  ]
})
export class LayoutModule { }
