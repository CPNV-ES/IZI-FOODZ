import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.set-bg').each(function () {
      console.log('BIIIITEEE');
      var bg = $(this).data('setbg');
      $(this).css('background-image', 'url(' + bg + ')');

    });
  }

}
