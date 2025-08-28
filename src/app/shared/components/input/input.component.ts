import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

type InputType = 'text' | 'number' | 'email' | 'password';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: false,
})
export class InputComponent  implements OnInit {
  @Input() type: InputType = 'text';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl();

  public hasError = false;
  constructor() {}

  ngOnInit() {}

  public onType(event: any) {
    this.hasError = this.control.errors ? true : false;
    this.control.setValue(event.target.value)
  }

}
