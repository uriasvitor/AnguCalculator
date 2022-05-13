import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { reqService } from '../services/requisition.service';
import { valores } from '../models/calculos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit,DoCheck{
  display:any = '0';
  values = '';
  prop = [0,1,2,3,4,5,6,7,8,9];
  old?:valores[];

  constructor(private reqService:reqService){}
  ngOnInit(): void {
    this.getOld()
  }

  ngDoCheck(): void {
    console.log(this.display)
  }
  getOld(){
    this.reqService.getOld().subscribe((res:any) => {
      this.old = res
    })
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
    this.getOld()
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }


}
