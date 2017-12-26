import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() home = new EventEmitter();


  toggleHome() {
     this.home.emit('home');
  }

  constructor() { }

  ngOnInit() {
  }

}
