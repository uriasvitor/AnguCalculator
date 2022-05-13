import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { reqService } from '../services/requisition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit,DoCheck{
  display:any = '0';
  values = '';
  prop = [0,1,2,3,4,5,6,7,8,9];

  constructor(private reqService:reqService){}
  ngOnInit(): void {}

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
  pressOperator(op: string) {
    const lastKey = this.display[this.display.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+')  {
      return;
    }
    this.display = this.display + op
  }

  clearDisplay(){
    this.display = '0';
    window.location.reload();
  }


  postNumber(num:any){
    this.reqService.addCount(num).subscribe(res => {
      this.display = res
    })
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }


}
