import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [AppComponent, CartComponent, ProductsComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
