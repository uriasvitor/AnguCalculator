import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class reqService {
  constructor(private http:HttpClient){}

  rootUrl = 'http://localhost:8080';

  getCount(){
    return this.http.get(this.rootUrl + '/calcular');
  }

  addCount(count:any){
    return this.http.post(this.rootUrl + '/calcular',{count});
  }

}
