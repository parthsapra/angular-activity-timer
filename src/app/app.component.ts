import { Component, OnInit } from "@angular/core";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  now: Date = new Date();
  interval;
  activity:any=[];
  duration;
  isCliked: boolean;
  isClickedStart: boolean;
  counter;
  isActivity:boolean;
  minutes: any = "00";
  activityMinutes: any = "00";
  seconds: any = "00";
  activitySeconds: any = "00";
  milliseconds: any = "00";
  activityMilliseconds: any = "00";
  activities:Array<string>;
  model   = {option: 'Coding and Design'};
  constructor() {
this.activities=['Coding and Design','Documentation'];
  }
  ngOnInit() {
    this.isCliked = true;
    this.isClickedStart = false;
  }
  startTimer() {
    this.isCliked = false;
    this.isClickedStart = true;
    const startTime = Date.now() - (this.counter || 0);
    this.interval = setInterval(() => {
      this.counter = Date.now() - startTime;
      this.milliseconds = Math.floor(
        Math.floor(this.counter % 1000) / 10
      ).toFixed(0);
      this.minutes = Math.floor(this.counter / 60000);
      this.seconds = Math.floor(
        Math.floor(this.counter % 60000) / 1000
      ).toFixed(0);
      if (Number(this.minutes) < 10) {
        this.minutes = "0" + this.minutes;
      } else {
        this.minutes = "" + this.minutes;
      }
      if (Number(this.seconds) < 10) {
        this.seconds = "0" + this.seconds;
      } else {
        this.seconds = "" + this.seconds;
      }
      if (Number(this.milliseconds) < 10) {
        this.milliseconds = "0" + this.milliseconds;
      } else {
        this.milliseconds = "" + this.milliseconds;
      }
      if (Number(this.minutes) == 1) {
        alert("times up");
        location.reload();
        // clearInterval(this.interval);
      }
    });
  }
  pauseTimer() {
    clearInterval(this.interval);
  }
  click:number=0;
  running:boolean=false;
  startActivity(){
    this.running = !this.running;
    if(this.running){
    const startTime = Date.now() - (this.counter || 0);
        this.activity = setInterval(() => {
      this.counter = Date.now() - startTime;
      this.activityMilliseconds = Math.floor(
        Math.floor(this.counter % 1000) / 10
      ).toFixed(0);
      this.activityMinutes = Math.floor(this.counter / 60000);
      this.activitySeconds = Math.floor(
        Math.floor(this.counter % 60000) / 1000
      ).toFixed(0);
      if (Number(this.activityMinutes) < 10) {
        this.activityMinutes = "0" + this.activityMinutes;
      } else {
        this.activityMinutes = "" + this.activityMinutes;
      }
      if (Number(this.activitySeconds) < 10) {
        this.activitySeconds = "0" + this.activitySeconds;
      } else {
        this.activitySeconds = "" + this.activitySeconds;
      }
      if (Number(this.activityMilliseconds) < 10) {
        this.activityMilliseconds = "0" + this.activityMilliseconds;
      } else {
        this.activityMilliseconds = "" + this.activityMilliseconds;
      }
      if (Number(this.activitySeconds) == 20) {
        alert("times up");
        clearInterval(this.activity);
      }
    });
    }
  }
  activityLog:any=[];
  btnDisable:boolean=true;
  timeTaken:any=[];
  pauseActivityTimer(){
     clearInterval(this.activity);
     let totalTime=this.activityMinutes+':'+this.activitySeconds+':'+this.activityMilliseconds;
     this.timeTaken.push(totalTime);
      this.activityLog.push({'Activity':this.model.option,'Time':this.timeTaken});
  }
  reset(){
    location.reload();
  }
}
