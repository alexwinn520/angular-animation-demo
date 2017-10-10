import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';

import { ProductService } from './services/product.service';
import { LoaderComponent } from './loader/loader.component';
import { FormFocusDirective } from './form-focus.directive';
import { AnimationsAllComponent } from './animations-all/animations-all.component';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    LoaderComponent,
    FormFocusDirective,
    AnimationsAllComponent
  ],
  imports: [
    AlertModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
