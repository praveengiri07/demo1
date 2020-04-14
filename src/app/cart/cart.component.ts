import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalAmount:any= 0;
  cartItems=[]
  constructor(private _cart:CartService, private _router:Router) { }

  ngOnInit() {
    this.cartItems=this._cart.cartItem;
    //this.cartItems.forEach(data=>{this.totalAmount=this.totalAmount+data.price})
    this.totalAmount=this.cartItems.reduce((acc, data)=>(data.price+acc), 0)
  }
  removeFromCart(product){
    let startIndex=this._cart.cartItem.indexOf(product)
    this._cart.cartItem.splice(startIndex,1)
    //this.totalAmount= product.reduce((acc, data, total1:any=this.totalAmount)=>(acc=total1-data.price), 0)
    this.totalAmount = this.totalAmount - product.price;
  }
  makePayment(){
    this._router.navigate(['product'])
  }

}
