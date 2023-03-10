import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './courses.component';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
//import { LoginModule_1 as LoginModule } from "./login/login.module";

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
        AboutusComponent,
        ProductViewComponent,
        TemplatedrivenComponent,
        ReactiveFormsComponent,
        ReactiveFormComponent,
        LoginComponent
    ],
    providers: [MainService],
    bootstrap: [AppComponent],
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
        ReactiveFormsModule,
        MatFormFieldModule,
    ]
})
export class AppModule { }
