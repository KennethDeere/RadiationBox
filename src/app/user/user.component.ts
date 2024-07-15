import { Component, Input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface UserName {
  name: string;
}

@Component({
  selector: 'user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [FormsModule],
})
export class UserComponent {
  @Input({ required: true }) users!: UserName[];
  clickedOn = output<string>();
  selected_user = <string>'User';

  UserSelected() {
    //this logs when i select a user but when I make log the varialbe I set it too in app component it wont log it.

    //console.log(this.selected_user);
    this.clickedOn.emit(this.selected_user);
  }
}
