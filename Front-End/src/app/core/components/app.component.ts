import { Component, DoCheck, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { reqService } from '../services/requisition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit,DoCheck{

  constructor(private reqService:reqService){}
  ngDoCheck(): void {
    console.log(this.getnum)
  }

  getnum = ''
  count: any[]=[];

  destroy$: Subject<boolean> = new Subject<boolean>();
  ngOnInit(): void {
    this.getAllUsers()
    console.log(this.count)
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }

  prop = [0,1,2,3,4,5,6,7,8,9,"+","-","*","/","Calcular"];
  resultado = "";

  getAllUsers() {
    this.reqService.getCount().pipe(takeUntil(this.destroy$)).subscribe((count: any) => {
        this.count = count;
    });
  }

  addNumber(num:any){
    this.reqService.addCount(num).subscribe(Response => {
      console.log(num)
    })
  }

  getNumber(num:any){
    this.getnum = num;

  }

}
