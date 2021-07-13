import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

// services
import { PubsubService } from '../services/pub-sub.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDetails: any;
  showWarning: boolean;
  nummbers: any = [];
  disableLoginButton: boolean;
  // calls when we r creating instance of class
  constructor(private router: Router, private pubsubSvc: PubsubService) {
    this.showWarning = false;
    this.disableLoginButton = true;
    this.userDetails = {
      email: '',
      password: ''
    };
  }



  // lifecylce hook
  ngOnInit() {
  }

  enableLoginButton() {
    if (this.userDetails.email && this.userDetails.password) {
      this.disableLoginButton = false;
    } else {
      this.disableLoginButton = true;
    }
  }

  checkUser() {
    const userDetails: any = localStorage.getItem('userDetails');
    const allUsers: any = JSON.parse(userDetails);
    if (allUsers) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < allUsers.length; i++) {
        if (this.userDetails.email === allUsers[i].email && this.userDetails.password === allUsers[i].password) {
          this.router.navigate(['/home']);
          localStorage.setItem('token', 'loggedIn');
          this.pubsubSvc.pubLoginStatus('loggedIn');
          return;
        }
      }
    }
    this.userDetails = {
      email: '',
      password: ''
    };
    this.showWarning = true;

  }

}
