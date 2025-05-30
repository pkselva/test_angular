import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username = "";
  email = "";
  password = "";

  list: any = [];

  @Output() registerList = new EventEmitter<any>();

  onSubmit(registerForm: NgForm) {
    this.list.push(registerForm.value);
    this.registerList.emit(this.list);
  }
}
