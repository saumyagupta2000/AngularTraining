import { Component } from '@angular/core';
import {MainService} from '../main.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  toggle: boolean = false;
  constructor(_service: MainService){       //Dependency Injection
    //let courses = new MainService();
    console.log(_service)
  }
  SetToggle =() =>{
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }
}
//ng g c <component name>