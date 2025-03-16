import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marriageInvitation';

  data = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  constructor() { }

  ngOnInit() {
    this.calculateDays()
  }

  calculateDays() {
    let marraigeDate: any = new Date("2025/04/21 11:55:00")
    setInterval(() => {
      this.data = this.timeDiffCalc(marraigeDate, new Date())
    }, 1000)
  }


  timeDiffCalc(dateFuture, dateNow) {
    let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

    // calculate days
    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;
    console.log('calculated days', days);

    // calculate hours
    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;
    console.log('calculated hours', hours);

    // calculate minutes
    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;
    console.log('minutes', minutes);

    const seconds = Math.floor(diffInMilliSeconds % 60);
    console.log(seconds);

    let difference = {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }
    return difference
  }


}
