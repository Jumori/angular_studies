import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() eventFired = new EventEmitter<number>();
  interval;
  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.eventFired.emit(this.count + 1);
      this.count++;
    },1000)
  }

  onStopGame() {
    clearInterval(this.interval);
  }

}
