import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TopBarComponent implements OnInit {

  @Output()
  buttonToggle: EventEmitter <any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  buttonClicked() {
    this.buttonToggle.emit();
  }
}
