import { Product } from './Models/Product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  url = "http://localhost:8080/product/"
  getAllProducts() {
    return this.http.get<Product[]>(this.url+"getall");
  }
}
