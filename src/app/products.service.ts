import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, flatMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }
  getData(){
    return this._http.get("https://raw.githubusercontent.com/praveengiri07/demo1/3e392498d4ec946f1debce220cd348ef05d02a92/products.json").pipe(map(data=>data['products']), flatMap(data1=>data1));
  }
}
