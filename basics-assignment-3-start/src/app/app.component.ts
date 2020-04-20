import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayStatus = false;
  logClicks = [];

  displayContent() {
    this.displayStatus = !this.displayStatus;
    // this.logClicks.push(this.logClicks.length + 1);
    this.logClicks.push(new Date());
  }

  changeLogColor(log) {
    // if (log >= 5) return {backgroundColor: 'blue'};
    if (log >= 4) return {backgroundColor: 'blue'};
    return {backgroundColor: 'transparent'};
  }

}
