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
    this.display = `${this.selectedUserName} will be using the microwave for ${this.clockTime} minutes!`;
    for (let i = 0; i < this.user_and_time.length; i++) {
      if (this.user_and_time[i].includes(this.selectedUserName)) {
        return;
      }
    }
    this.user_and_time.push(this.display);
  }
  display = <string>'';

  user_and_time: string[] = [];
}
