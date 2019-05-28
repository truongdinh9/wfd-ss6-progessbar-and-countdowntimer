import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-count-timer',
  templateUrl: './count-timer.component.html',
  styleUrls: ['./count-timer.component.css']
})
export class CountTimerComponent implements OnInit {
  @Input() timer: number;

  constructor() {
  }

  ngOnInit() {
    this.countDown();
  }

  countDown() {
    setInterval(() => {
      if (this.timer !== 0) {
        this.timer--;
      }
    }, 500);
  }


}
