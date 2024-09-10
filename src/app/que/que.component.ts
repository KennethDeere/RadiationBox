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
  QueueObject: InputArray;
  QueueArray: InputArray[] = [];
  EmptyDataError = <string>'';

  Submit() {
    if (this.Name && this.PrintName && this.Time) {
      this.QueueObject = {
        Name: this.Name,
        Time: this.Time,
        PrintName: this.PrintName,
      };
      this.QueueArray.push(this.QueueObject);
      this.Name = '';
      this.PrintName = '';
      this.Time = '';
    } else {
      this.EmptyDataError = ' Error! One of the boxes is empty!';
    }
  }

  RemoveFromList(index: number) {
    this.QueueArray.splice(index, 1);
  }
}
interface InputArray {
  Name: string;
  PrintName: string;
  Time: string;
}
