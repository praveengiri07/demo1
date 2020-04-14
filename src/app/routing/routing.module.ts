import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { CartComponent } from '../cart/cart.component';
import { ProductsComponent } from '../products/products.component';

let cart={component: CartComponent, path:"cart"}
let product={component: ProductsComponent, path:"product"}
let defaultChild1={path:'**', redirectTo: "product"}
let route1:Routes=[cart, product, defaultChild1]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(route1)
  ], 
  exports: [RouterModule]
})
export class RoutingModule { }
