import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  //declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  //exports: [LoginComponent,RouterModule],
  providers: [],
})
export class LoginModule {}
