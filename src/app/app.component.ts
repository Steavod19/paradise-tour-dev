import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tourLanding: boolean = false;

  toggleTourLanding() {
    this.tourLanding = !this.tourLanding;
  }
  toggleHomePage() {
    this.tourLanding = false;
  }
}
