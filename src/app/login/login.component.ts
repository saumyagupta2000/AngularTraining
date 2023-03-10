import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { MainService } from '../main.service';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  toggle: boolean = true;
  @Input() counter: any;
  @Input() item: any;
  @Output() updateOutput = new EventEmitter<any>();
  @Input() needle: string = '';
  @Input() haystack: string = '';
  public result: any = [];
  @Output() isloggedin = new EventEmitter<any>();
  value: any = 'one way binding';
  //name = 'abcxyz';
  tbColspan = '2';
  pClass = 'colorClass';
  form: any = {
    name: 'abc',
    email: 'abc@gmail.com',
    city: 'daman',
    password: 'xyzabc',
  };
  val = 11;
  imageFound: any = '';
  userFormfdf = {
    name: '',
    age: '',
    email: '',
    phoneNumber: '',
    password: '',
  };
  isvalid: boolean = false;
  returnUrl: any;
  constructor(
    _serive: MainService,
    private loginservice: LoginService,
    private auth: AuthserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // let course = new MainService();
    console.log('course', _serive.getCourses());
    console.log(this.loginservice.setLoginDetails().city);
    console.log('inside constructor');
    // console.log('name', this.name);
  }

  ngOnInit(): void {
    console.log('inside ngOnInitdfdfff');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('inside ngOnChanges', this.counter, changes);
    const regEx = new RegExp('(' + this.needle + ')', 'i');
    this.result = this.haystack.split(regEx);
  }

  ngDoCheck(): void {
    console.log('inside ngDoCheckdfdf');
  }

  ngOnDestroy(): void {
    console.log('inside ngOnDestroy');
  }
  callToogle() {
    this.toggle = this.toggle ? false : true;
    // console.log('name', this.name);
  }

  update() {
    console.log('update btn clicked');
  }

  keyPressed(value: any) {
    //if(event.keyCode==13){
    console.log('key entered pressed', value);
    //}
  }

  btnSave() {
    console.log('form Values', this.form);
  }

  // let name="admin@test.in";
  // let password="admin@123";
  // if (this.userFormfdf.email == name && this.userFormfdf.password == password){
  //   this.isloggedin.emit(true);
  // }else{
  //   this.isvalid=true;
  // }
  //   this.isvalid=true;
  //   this.isvalid=true;
  btnSubmit(userForm: any) {
    console.log('userForm', userForm);
    console.log('userFormfdf', this.userFormfdf);
    this.auth
      .login(this.userFormfdf.email, this.userFormfdf.password)
      .subscribe((res: { status: number; }) => {
        if (res.status == 200) {
          this.isloggedin.emit(true);
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          console.log('returnUrl', this.returnUrl);
          this.router.navigate([this.returnUrl]);
        }
      });
  }
}
