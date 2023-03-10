import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthguardGuard } from './authguard.guard';
import { CoursesComponent } from './courses.component';
import { HighlightComponent } from './highlight/highlight.component';
import { LoginComponent } from './login/login.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';

const routes: Routes = [
  {
    path:'',
    component: ProductComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'contributions',
    component: CoursesComponent
  },
  {
    path: 'product-view',
    component: ProductViewComponent
  },
  {
    path: 'highlight',
    component: HighlightComponent
  },
  {
    path: 'tdf',
    component: TemplatedrivenComponent
  },
  {
    path: 'raf',
    component: ReactiveFormsComponent
  },
  { 
    path: 'loginform', 
    component: LoginComponent 
  },
  // { 
  //   path: 'registerform', 
  //   component: RegisterComponent 
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
