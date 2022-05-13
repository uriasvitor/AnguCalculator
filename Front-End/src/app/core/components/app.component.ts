import { Component, DoCheck, OnInit } from '@angular/core';
import { reqService } from '../services/requisition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit,DoCheck{
  display = '0';
  values = '';
  prop = [0,1,2,3,4,5,6,7,8,9,"+","-","*","/"];

  constructor(private reqService:reqService){}
  ngDoCheck(): void {
    console.log(this.display)
  }

  getNumber(num:any){
    if(this.display ==='0'){
      this.display = num.toString();
      }else{
        this.display = `${this.display}${num}`;
        this.values = this.display
      }
  }
  getResult(){
    this.reqService.getCount().subscribe(res =>{
      console.log('')
    })
  }
  clearDisplay(){
    this.display = '0';
  }

  postNumber(num:any){
    this.reqService.addCount(num).subscribe(Response => {
      console.log(num);
      this.getNumber(0)
      console.log(this.display)
    })
  }

  ngOnInit(): void {}

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
}
