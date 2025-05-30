import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  
  // loginData:any;
  registerList:{username: string, email: string, password: string}[] = [];

  // loginEvent(data: any){
  //   this.loginData = data;
  //   this.findObject();
  // }

  registerEvent(data: any){
    console.log(data);
    this.registerList = data;
  }

  // findObject(){
  //   let checkObject = null;
  //   this.registerList.forEach((obj: any) => {
  //     if(obj.username === this.loginData.username){
  //       checkObject = obj;
  //     }
  //   })
  //   if(checkObject){
  //     alert("Login Successfully");
  //   }
  //   else{
  //     alert("Invalid Credentials");
  //   }
  // }
}
