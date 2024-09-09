import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
//import { sound } from 'Hub.mp3';
import { DateTime } from 'luxon';
// import * as sound from 'src/assets/applause_y.wav';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { KeypadComponent } from './keypad/keypad.component';
import { UserComponent } from '../user/user.component';
import { UserNames } from '../user/user.list';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-radbox',
  standalone: true,
  imports: [
    HeaderComponent,
    KeypadComponent,
    UserComponent,
    MatIconModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink,
    NavbarComponent,
  ],
  templateUrl: './radbox.component.html',
  styleUrl: './radbox.component.css',
})
export class RadboxComponent {
  Users = UserNames.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });
  SelectedUserName: string = '';
  UserCookTime: number = 0;
  UsersCookTotal: number = 0;
  UserAndTimeObject: UserAndTime;
  _MinutesOrMinute: string;

  title = 'RadiationBox';
  list = Array.from({ length: 9 }, (value, index) => index + 1);

  SetTimeButton(amt: number) {
    console.log(amt);
    this.UserCookTime = amt;
  }

  get selectedUser() {
    return this.Users.find((_user) => _user.name === this.SelectedUserName);
  }

  UserPicker(name: string) {
    console.log(name);
    this.SelectedUserName = name;
  }

  confirm() {
    this.UserAndTimeObject = {
      name: this.SelectedUserName,
      time: this.UserCookTime,
    };
    if (this.SelectedUserName && this.UserCookTime) {
      for (let i = 0; i < this.UserAndTimeArray.length; i++) {
        let _user = this.UserAndTimeArray.findIndex(
          (_user) => _user.name === this.SelectedUserName
        );
        if (_user > -1) {
          this.UserAndTimeArray.splice(_user, 1);
          i--;
        }
      }
      this.UserAndTimeArray.splice(
        ((this.UserAndTimeArray.length + 1) * Math.random()) | 0,
        0,
        this.UserAndTimeObject
      );
      this.EmptyDataError = '';
      localStorage.setItem('_list', JSON.stringify(this.UserAndTimeArray));
    } else {
      this.EmptyDataError = 'Error! Either name or time was not selected!';
    }
  }
  ConfirmCookTime() {
    this.CookTimeFormating = DateTime.now().set({
      hour: 12,
      minute: 0,
      second: 0,
    });
    this.UsersCookTotal = 0;
    for (let x = 0; x < this.UserAndTimeArray.length; x++) {
      console.log(this.UserAndTimeArray[x].time);
      this.UsersCookTotal += this.UserAndTimeArray[x].time;
    }
    console.log(this.UsersCookTotal);
    this.CookTimeFormating = this.CookTimeFormating.minus({
      minutes: this.UsersCookTotal,
    });
    this.CookTime = this.CookTimeFormating.toFormat('h:mm').toLocaleLowerCase();
    this.StartTimeString = `First person starts at: ${this.CookTime} `;
    localStorage.setItem('_StartTime', this.StartTimeString);
    console.log(this.StartTimeString);
    this.UserCookTime = 0;
    if (this.UserAndTimeArray.length === 0) {
      this.ClearList();
    }
  }

  EmptyDataError: string = '';
  DisplayUserAndTime = <string>'';
  UserAndTimeArray: UserAndTime[] = [];
  CookTime: string;
  StartTimeString = <string | null>'';
  CookTimeFormating = DateTime.now().set({ hour: 12, minute: 0, second: 0 });

  constructor() {
    let getList = localStorage.getItem('_list');
    if (!!!getList) {
      localStorage.setItem('_list', JSON.stringify(this.UserAndTimeArray));
    }
    const getListParsed = getList ? (JSON.parse(getList) as UserAndTime[]) : [];
    console.log(getListParsed);
    this.UserAndTimeArray = getListParsed;
    console.log(this.Users, UserNames);
  }

  ngOnInit() {
    let start_time: string | null = localStorage.getItem('_StartTime');
    this.StartTimeString = start_time;
  }

  ClearList() {
    localStorage.clear();
    this.UserAndTimeArray = [];
    this.StartTimeString = '';
    this.CookTimeFormating = DateTime.now().set({
      hour: 12,
      minute: 0,
      second: 0,
    });
  }
  RemoveFromList(index: number) {
    this.UserAndTimeArray.splice(index, 1);
    this.CookTimeFormating = DateTime.now().set({
      hour: 12,
      minute: 0,
      second: 0,
    });
    this.UsersCookTotal = 0;
    for (let x = 0; x < this.UserAndTimeArray.length; x++) {
      console.log(this.UserAndTimeArray[x].time);
      this.UsersCookTotal += this.UserAndTimeArray[x].time;
    }
    console.log(this.UsersCookTotal);
    this.CookTimeFormating = this.CookTimeFormating.minus({
      minutes: this.UsersCookTotal,
    });
    this.CookTime = this.CookTimeFormating.toFormat('h:mm').toLocaleLowerCase();
    this.StartTimeString = `First person starts at: ${this.CookTime} `;
    localStorage.setItem('_StartTime', this.StartTimeString);
    console.log(this.StartTimeString);
    this.UserCookTime = 0;
    localStorage.setItem('_list', JSON.stringify(this.UserAndTimeArray));
    if (this.UserAndTimeArray.length === 0) {
      this.ClearList();
    }
  }
  EasterOne() {
    for (var i = 0; i < this.UserAndTimeArray.length; i++) {
      if (this.UserAndTimeArray[i].name === 'Jacob') {
        this.UserAndTimeArray.splice(0, 0, this.UserAndTimeArray[i]);
        this.UserAndTimeArray.splice(i + 1, 1);
      }
    }
  }

  TimerStart = DateTime.now().set({
    hour: 12,
    minute: 0,
    second: 0,
  });
  TimerEnd = this.TimerStart.minus({ minutes: this.UsersCookTotal });

  //Alarm() {
  //if (DateTime.now() === this.TimerEnd) {
  // var audio = new Audio(sound);
  //const audio = new Audio('../assets/applause_y.wav');
  // const audio = new Audio('../assets/applause_y.wav');
  // const audio = new Audio('../assets/applause_y.wav');
  //audio.play();
  //console.log('mp3');
  //}
  //}
  //IntervalID = setInterval(this.Alarm, 30000);
}
interface UserAndTime {
  name: string;
  time: number;
}
