import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CoursesComponent } from './courses.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path:'',
    component: ProductComponent,
  },
  {
    path: 'contributions',
    component: CoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
