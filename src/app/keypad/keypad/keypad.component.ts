import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'keypad',
  standalone: true,
  imports: [],
  templateUrl: './keypad.component.html',
  styleUrl: './keypad.component.css',
})
export class KeypadComponent {
  //buttonTime?: number;

  @Input({ required: true }) label!: number;
  @Output() onClick = new EventEmitter<number>();

  selected_number = <number>0;

  onClickButton() {
    this.onClick.emit(this.label);
  }
}
