import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { KeypadComponent } from './keypad/keypad/keypad.component';
import { UserComponent } from './user/user.component';
import { UserNames } from './user/user.list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, KeypadComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = UserNames;
  selectedUserName: string = '';
  clockTime?: number;

  title = 'RadiationBox';

  list = Array.from({ length: 9 }, (value, index) => index + 1);

  setTime(amt: number) {
    console.log(amt);
    this.clockTime = amt;
  }

  get selectedUser() {
    return this.users.find((_user) => _user.name === this.selectedUserName);
  }
  clickedOn(name: string) {
    console.log(name);
    this.selectedUserName = name;
  }
  confirm() {
    if (this.selectedUserName && this.clockTime) {
      this.display = `${this.selectedUserName} will be using the microwave for ${this.clockTime} minutes!`;
      for (let i = 0; i < this.user_and_time.length; i++) {
        if (this.user_and_time[i].includes(this.selectedUserName)) {
          this.user_and_time.splice(i, 1);
          i--;
          this.noData = '';
        }
      }
      this.user_and_time.push(this.display);

      localStorage.setItem('_list', JSON.stringify(this.user_and_time));

      this.clockTime = undefined;
    } else {
      this.noData = 'Error! Either name or time was not selected!';
    }
  }
  noData: string = '';
  display = <string>'';

  user_and_time: string[] = [];

  constructor() {
    //let userlist = JSON.stringify(this.user_and_time);
    //localStorage.setItem('_list', userlist);
    let getList = localStorage.getItem('_list');
    if (!!!getList) {
      localStorage.setItem('_list', JSON.stringify(this.user_and_time));
    }
    const getListParsed = JSON.parse(getList) as string[];
    console.log(getListParsed);
    this.user_and_time = getListParsed;
  }

  clear() {
    localStorage.clear();
    this.user_and_time = [];
  }
  //randomize() {
  //  shuffle(this.user_and_time)
  //}
}
