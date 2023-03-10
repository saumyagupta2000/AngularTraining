import { Component } from '@angular/core';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.scss']
})
export class TemplatedrivenComponent {
  userFormfdf={
    "name":'',
    "age":'',
    "email":'',
    "phoneNumber":''
  }
  btnSubmit(userForm:any) {
    console.log('userForm', userForm);
    console.log('userFormfdf', this.userFormfdf);
  }
}
