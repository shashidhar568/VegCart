import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { PubsubService } from '../services/pub-sub.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cartData : any;
  constructor(private commonSvc:CommonService,private pubsubSvc:PubsubService) { 
    this.getCardsData()
  }

  getCardsData(){
    this.commonSvc.getAllData()
    .subscribe((result:any)=> {
      console.log('==========',result)
      this.cartData = result;
    }, err => {
      console.log('==========',err)
    })
  }

  incCart(){
    alert()
    this.pubsubSvc.pubIncCart(1)
  }

  ngOnInit() {
  }

}
