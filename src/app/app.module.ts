import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { Punto1Component } from './punto1/punto1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Punto2Component } from './punto2/punto2/punto2.component';
import { FormComponent } from './form/form/form.component';
import { TableComponent } from './table/table/table.component';
import { Pto1Component } from './pto1/pto1.component';
import { HttpClientModule } from '@angular/common/http';
import { Pto1AComponent } from './pto1-a/pto1-a.component';
import { PagebComponent } from './pageb/pageb/pageb.component';
import { Pto2Component } from './pto2/pto2.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Punto1Component,
    Punto2Component,
    FormComponent,
    TableComponent,
    Pto1Component,
    Pto1AComponent,
    PagebComponent,
    Pto2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
