import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = "";
  password = "";

  @Input() list: any[] = [];

  onSubmit(loginForm: NgForm){
    // this.loginList.emit(loginForm.value);
    console.log(loginForm.value);
    console.log(this.list)
    this.findObject();
  }

  findObject(){
    let checkObject = null;
    this.list.forEach((obj: any) => {
      if(obj.username === this.username){
        checkObject = obj;
      }
    })
    if(checkObject){
      alert("Login Successfully");
    }
    else{
      alert("Invalid Credentials");
    }
  }
}
