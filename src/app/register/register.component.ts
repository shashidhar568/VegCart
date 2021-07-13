import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../helpers/must-watch-validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userDetails: any;
  disableRegisterButton: boolean;
  validationMessages: any;

  constructor(private router: Router) {
    this.disableRegisterButton = true;

    this.userDetails = {
      name: '',
      lName: '',
      email: '',
      password: ''
    };
    this.validationMessages = {
      name: {
        msg: 'Please enter valid first name',
        show: false
      },
      lName: {
        msg: 'Please enter valid last name',
        show: false
      },
      email: {
        msg: 'Please enter valid email',
        show: false
      },
      password: {
        msg: 'Please enter valid password',
        show: false
      }
    }
  }

  ngOnInit() {
  }

  enableRegisterButton(type?: any) {
    switch (type) {
      case 'fname':
        if (!/^[a-z][a-z\s]*$/.test(this.userDetails.name)) {
          this.validationMessages.name.show = true;
        } else {
          this.validationMessages.name.show = false;
        }
        break;
      case 'lName':
        if (!/^[a-z][a-z\s]*$/.test(this.userDetails.lName)) {
          this.validationMessages.lName.show = true;
        } else {
          this.validationMessages.lName.show = false;
        }
        break;
      case 'email':
        if (!this.validateEmail(this.userDetails.email)) {
          this.validationMessages.email.show = true;
        } else {
          this.validationMessages.email.show = false;
        }
        break;
      case 'password':
        if (!this.userDetails.password) {
          this.validationMessages.password.show = true;
        } else {
          this.validationMessages.password.show = false;
        }
        break;
      default:
        break;
    }
    this.disableRegisterButton = true;
    for (let item in this.validationMessages) {
      if (this.validationMessages[item].show) {
        this.disableRegisterButton = true;
      }
    }

    if (this.userDetails.name && this.userDetails.lName && this.userDetails.email &&
      this.userDetails.password) {
      this.disableRegisterButton = false;
    }
  }

  userRegistration() {
    if (this.disableRegisterButton) {
      alert('Please enter all the details')
      return
    }
    let allUsers: any = [];
    const users: any = localStorage.getItem('userDetails')
    if (JSON.parse(users) && JSON.parse(users).length > 0) {
      allUsers = JSON.parse(users);
    }
    allUsers.push(this.userDetails);
    localStorage.setItem('userDetails', JSON.stringify(allUsers));
    this.router.navigate(['/login']);
  }

  validateEmail(email: any) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
