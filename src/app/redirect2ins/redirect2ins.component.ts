import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect2-ins',
  templateUrl: './redirect2ins.component.html',
  styleUrls: ['./redirect2ins.component.css']
})
export class Redirect2InsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.href = 'https://www.instagram.com/dreamcatcher.by.sia';
  }

}
