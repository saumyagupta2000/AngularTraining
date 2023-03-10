import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
  // userForm = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl(''),
  //   email: new FormControl(''),
  //   mobile: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     country: new FormControl('')
  //   }),
  // });

  // constructor(private fb: FormBuilder){}
  // userFormFB = this.fb.group({
  //   name:['', [Validators.required]],
  // })

  // get fbData() {
  //   return this.userForm.controls;
  // }

  // submitForm() {
  //   console.log('userForm', this.userForm.value);
  // }

  // loadData(){
  //   this.userForm.patchValue({
  //     name: "abc",
  //     age: "20",
  //     email: "xyz@gmail.com",
  //     mobile: "0123456789",
  //   })
  // }
  userForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl(''),
    }),
  });

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
    this.userForm.setValue({
      name: 'abc',
      age: '20',
      email: 'abc@test.co',
      phoneNumber: '12124324',
      address: {
        city: 'daman',
        state: 'daman',
        country: 'india',
      },
    });
  }
}
