import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public slides = [
    { src: 'assets/images/bg_1.jpg' },
    { src: 'assets/images/bg_1.jpg' }
  ];
  constructor() { }

  ngOnInit(): void { 
   
  }

}
