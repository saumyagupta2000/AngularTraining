import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  constructor(private fb: FormBuilder) {}
  userForm = this.fb.group({
    name: ['',[Validators.required]],
    age: [''],
    email: [''],
    phoneNumber: [''],
    // address: ({
    //   city: [''],
    //   state: [''],
    //   country: [''],
    // }),
  });

  get f() {
    return this.userForm.controls;
  }

  btnSubmit() {
    console.log('userForm', this.userForm.value);
  }

  btnLoadApiData() {
    this.userForm.patchValue({
      name: 'abc',
      age: '20',
      email: 'abc@test.co',
      phoneNumber: '12124324',
      // address: {
      //   city: 'daman',
      //   state: 'daman',
      //   country: 'india',
      // },
    });
    // this.userForm.setValue({
    //   name: 'abc',
    //   age: '20',
    //   email: 'abc@test.co',
    //   phoneNumber: '12124324',
    //   address: {
    //     city: 'daman',
    //     state: 'daman',
    //     country: 'india',
    //   },
    // });
  }
}
