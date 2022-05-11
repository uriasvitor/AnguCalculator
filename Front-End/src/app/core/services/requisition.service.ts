import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class reqService {
  constructor(private http:HttpClient){}

  rootUrl = '/api';

  getCount(){
    return this.http.get(this.rootUrl + '/counter');
  }

  addCount(count:any){
    return this.http.post(this.rootUrl + '/counter',{count});
  }

}
