import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tour-landing',
  templateUrl: './tour-landing.component.html',
  styleUrls: ['./tour-landing.component.scss']
})
export class TourLandingComponent implements OnInit {

  @Output() back = new EventEmitter();


  toggleBack() {
     this.back.emit('back');
  }

  constructor() { }

  ngOnInit() {
  }

}
