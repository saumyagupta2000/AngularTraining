import { Component } from '@angular/core';
import { Answer } from './enums'

enum Direction{
  left,right,up,dowm
}
interface rating{
  count:number,
  rate:number,
}
interface product{
  id:Number,
  title:number,
  category:string,
  description:string,
  image:string,
  price:number,
  rating:rating
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'angular-app';         //modifire annotations
  diection = Direction;
  answer = Answer;
  loggedin : boolean = false;
  products = [
    {
      title:'Product 1',
      id:1,
      description:'product detail'
    },
    {
      title:'Product 2',
      id:1,
      description:'product detail'
    },
    {
      title:'Product 3',
      id:1,
      description:'product detail'
    }
  ]
  sum = (a:number, b:string, c:boolean) => {               //arrow function
    console.log("Sum is", a,b,c)
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    arr.forEach(function(){
      //Javascript
    });
    arr.forEach(val=>{
      //Typescript
    })
  }
  count: any;
  childHide: boolean | undefined;

  constructor(){                                //constructor
    console.log(this.title);
    console.log(this.sum(2,'',true));
    console.log(this.diection.left)
    console.log(this.answer.no)
    if (localStorage.getItem('token') != null) {
      this.loggedin=true;
    }
  }

  ProductId:any = null
  p:any;

  // getData(event:any){
  //   console.log(event)
  //   this.ProductId = event
  // }

  assignData(event:any){
    //this.ProductId = event;
    this.ProductId = event;
  }
  navbarCollapsed = true;

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
  incrFun() {
    this.count++;
  }
  decrFun() {
    this.count--;
  }

  hdChild() {
    this.childHide = !this.childHide;
  }

  checkloginstatus(event:any){
    this.loggedin=event;
}
}
