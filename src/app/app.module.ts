import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './courses.component';
import { LoginModule } from './login/login.module';
import { MainService } from './main.service';
import { SingleProductComponent } from './single-product/single-product.component';
import { ProductComponent } from './product/product.component';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import { FooterComponent } from './footer/footer.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { InputformatDirective } from './inputformat.directive';
import { SummaryPipe } from './summary.pipe';
import { HighlightComponent } from './highlight/highlight.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SingleProductComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    InputformatDirective,
    SummaryPipe,
    HighlightComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [MainService],         //Add service here
  bootstrap: [AppComponent]
})
export class AppModule { }
