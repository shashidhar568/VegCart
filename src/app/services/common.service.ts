import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CommonService{

    constructor(private http:HttpClient){

    }

    getAllData() {
        let url ="http://localhost:4200/assets/cartitems.json"
        return this.http.get(url)
    }

    registerUser(data: any) {
      const url ='';
      return this.http.post(url,data)
    }

    
}