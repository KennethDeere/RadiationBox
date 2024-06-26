import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { KeypadComponent } from './keypad/keypad/keypad.component';
import { UserComponent } from './user/user.component';
import { UserNames } from './user/user.list';

import { DateTime } from 'luxon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, KeypadComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  Users = UserNames;
  SelectedUserName: string = '';
  UserCookTime?: number;

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
    if (this.SelectedUserName && this.UserCookTime) {
      this.DisplayUserAndTime = `${this.SelectedUserName} will be using the microwave for ${this.UserCookTime} minutes!`;
      for (let i = 0; i < this.UserAndTimeArray.length; i++) {
        if (this.UserAndTimeArray[i].includes(this.SelectedUserName)) {
          this.UserAndTimeArray.splice(i, 1);
          i--;
          this.EmptyDataError = '';
        }
      }
      this.UserAndTimeArray.splice(
        ((this.UserAndTimeArray.length + 1) * Math.random()) | 0,
        0,
        this.DisplayUserAndTime
      );

      localStorage.setItem('_list', JSON.stringify(this.UserAndTimeArray));

      this.CookTimeFormating = this.CookTimeFormating.minus({
        minutes: this.UserCookTime,
      });
      this.CookTime =
        this.CookTimeFormating.toFormat('h:mm').toLocaleLowerCase();
      this.StartTimeString = `First person starts at: ${this.CookTime} `;
      this.UserCookTime = null;
    } else {
      this.EmptyDataError = 'Error! Either name or time was not selected!';
    }
  }
  EmptyDataError: string = '';
  DisplayUserAndTime = <string>'';
  UserAndTimeArray: string[] = [];
  CookTime: string;
  StartTimeString: string;

  CookTimeFormating = DateTime.now().set({ hour: 12, minute: 0, second: 0 });

  constructor() {
    let getList = localStorage.getItem('_list');
    if (!!!getList) {
      localStorage.setItem('_list', JSON.stringify(this.UserAndTimeArray));
    }
    const getListParsed = getList ? (JSON.parse(getList) as string[]) : [];
    console.log(getListParsed);
    this.UserAndTimeArray = getListParsed;
  }

  ClearList() {
    localStorage.clear();
    this.UserAndTimeArray = [];
    this.StartTimeString = '';
  }
  /*  add30(){
    this.clockTime = this.clockTime +
  }*/
}
