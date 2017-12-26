import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'landing-body',
  templateUrl: './landing-body.component.html',
  styleUrls: ['./landing-body.component.scss']
})
export class LandingBodyComponent implements OnInit {


  @Output() tour = new EventEmitter();


  toggleTour() {
     this.tour.emit('tour');
  }


  constructor() { }

  ngOnInit() {
  }

}
