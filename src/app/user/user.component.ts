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
    this.clickedOn.emit(this.selected_user);
  }
}
