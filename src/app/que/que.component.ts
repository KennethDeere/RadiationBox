import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../radbox/header/header.component';
import { KeypadComponent } from '../radbox/keypad/keypad.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserComponent } from '../user/user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-que',
  standalone: true,
  imports: [
    KeypadComponent,
    UserComponent,
    MatButtonModule,
    MatIconModule,
    HeaderComponent,
    AppComponent,
    MatInputModule,
    NavbarComponent,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './que.component.html',
  styleUrl: './que.component.css',
})
export class QueComponent {
  Name = <string>'';
  PrintName = <string>'';
  Time = <string>'';
  QueueArray: InputArray[] = [];

  Submit() {
    const User = this.Name;
    const Print = this.PrintName;
    const PrintTime = this.Time;
    console.log(User, Print, PrintTime);
  }

  RemoveFromList(index: number) {
    this.QueueArray.splice(index, 1);
  }
}
interface InputArray {
  Name: string;
  PrintName: string;
  Time: number;
}
