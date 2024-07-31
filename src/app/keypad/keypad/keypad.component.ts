import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'keypad',
  standalone: true,
  imports: [],
  templateUrl: './keypad.component.html',
  styleUrl: './keypad.component.css',
})
export class KeypadComponent {

  @Input({ required: true }) label!: number;
  @Input({ required: true }) selected_number = <number>0;
  @Output() onClick = new EventEmitter<number>();

  onClickButton() {
    this.onClick.emit(this.label);
  }
}
