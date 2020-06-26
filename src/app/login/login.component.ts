import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSuccess: boolean;
  isFailed: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  Authenticate(cred) {
    console.log(cred.value);
    if(cred.value.id === "admin" && cred.value.password === "admin") {
       this.isSuccess = true;
       this.isFailed = false;
    } else {
      this.isFailed = true;
      this.isSuccess = false;
    }
  }
}
