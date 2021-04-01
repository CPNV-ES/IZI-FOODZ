import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  public slides = [
    { path: 'assets/img/hero/hero-1.jpg' },
    { path: 'assets/img/hero/hero-2.jpg' },
    { path: 'assets/img/hero/hero-3.jpg' },
    { path: 'assets/img/hero/hero-1.jpg' },
    { path: 'assets/img/hero/hero-4.jpg' },
    { path: 'assets/img/hero/hero-5.jpg' },
    { path: 'assets/img/hero/hero-2.jpg' },
    { path: 'assets/img/hero/hero-4.jpg' },
    { path: 'assets/img/hero/hero-6.jpg' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
