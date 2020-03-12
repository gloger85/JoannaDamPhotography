import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect2fb',
  templateUrl: './redirect2fb.component.html',
  styleUrls: ['./redirect2fb.component.css']
})
export class Redirect2fbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.href = 'https://www.facebook.com/joanna.dam.2019';
  }

}
