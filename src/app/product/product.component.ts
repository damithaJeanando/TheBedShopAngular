import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService : ProductService) { }

  products : Product[];
  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    return this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    })
  }

}
