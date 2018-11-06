import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-game-button',
  templateUrl: './game-button.component.html',
  styleUrls: ['./game-button.component.css']
})
export class GameButtonComponent implements OnInit {
  @Input()
  color: string;
  @Output()
  guess: EventEmitter<string> = new EventEmitter<string>();
  active: true;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.guess.emit(this.color);
  }

}
