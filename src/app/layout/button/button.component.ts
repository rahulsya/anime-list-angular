import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() title= '';
  @Output() newItemEvent=new EventEmitter<string>();
  
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
