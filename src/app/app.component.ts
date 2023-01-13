import { Component } from '@angular/core';
import { Answer } from './enums'

enum Direction{
  left,right,up,dowm
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

  constructor(){                                //constructor
    console.log(this.title);
    console.log(this.sum(2,'',true));
    console.log(this.diection.left)
    console.log(this.answer.no)
  }


}
