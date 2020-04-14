import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { CartService } from './cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productArray:any=[];
  constructor(private _products:ProductsService, private _cart:CartService, private _router:Router){
  }
  ngOnInit(){
    this._products.getData().subscribe((data)=>{this.productArray.push(data); console.log("Data="+data)})
  }
  addToCart(product){
    //localStorage.setItem("cartProduct",product)
    if(this._cart.cartItem.indexOf(product)!=-1){
      alert("Product is already present in the cart")
    } else {
      this._cart.cartItem.push(product);
    }
  }
  goToCart(){
    this._router.navigate(['cart'])
  }
}
