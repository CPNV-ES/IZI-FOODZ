import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() slides;
  constructor() { }
  ngOnInit(): void {
    
    $('.set-bg').each(function () {
      var bg = $(this).data('setbg');
      $(this).css('background-image', 'url(' + bg + ')');

    });
   
    
  }

}
