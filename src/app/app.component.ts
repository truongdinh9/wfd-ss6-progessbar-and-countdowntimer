import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Progress-Bar';
  timercha = 20;

  setTiemerCha() {
    this.timercha = 50;
  }
}
