import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PubsubService } from '../services/pub-sub.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  isUserLoggedIn: boolean;
  cartValue: any;

  constructor(private pubsubSvc: PubsubService, private router: Router) {

    this.cartValue = 0;
    this.isUserLoggedIn = false;
    this.authUserLoggedIn();
    this.updateTopnav();
  }


  updateTopnav() {
    this.pubsubSvc.subLoginStatus()
      .subscribe(result => {
        console.log('positive response in pub sub service is :', result);
        if (result === 'loggedIn') {
          this.isUserLoggedIn = true;
        } else {
          this.isUserLoggedIn = false;
          this.router.navigateByUrl('login');
        }
      }, err => {
        console.log('negative response in pub sub service is :', err);
      });
  }

  authUserLoggedIn() {

    const auth = localStorage.getItem('token');
    if (auth === 'loggedIn') {
      this.isUserLoggedIn = true;
    } else {
      this.router.navigateByUrl('/login');
      this.isUserLoggedIn = false;
    }

  }

  logout() {
    localStorage.setItem('token', 'loggedOff');
    this.pubsubSvc.pubLoginStatus('loggedOff');
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
