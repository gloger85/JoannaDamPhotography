import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  imgPath: string;
  constructor() { }

  ngOnInit() {
    this.imgPath = "/src/app/images/card.png"
  }

}
