import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JoannaDamPhotography';
  constructor() {
  }

  ngOnInit() {
  }

  private openFacebook() {
    window.open('https://www.facebook.com/joanna.dam.2019', '_blank');
  }

  private openInstagram() {
    window.open('https://www.instagram.com/dreamcatcher.by.sia', '_blank');
  }

}
