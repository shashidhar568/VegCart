import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PubsubService {

  loginStatus: Subject<any> = new Subject<any>();
  cartIncrement: Subject<any> = new Subject<any>();

  constructor() {

  }

  // publishing the user status
  pubLoginStatus(status: string) {
    this.loginStatus.next(status);
  }
  // subscribing the login status
  subLoginStatus() {
    return this.loginStatus.asObservable();
  }

  pubIncCart(inc:any){
    this.cartIncrement.next(inc)
}
subIncCart(){
    return this.cartIncrement.asObservable()
}
}
