import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private endpoint = 'http://localhost:8086/api/product_list?_format=json'; // replace with your Drupal endpoint

  private mockProducts: Product[] = [
    new Product(1, 'Product 1', 'Description for product 1', 99.99, 'path/to/image1.jpg'),
    new Product(2, 'Product 2', 'Description for product 2', 89.99, 'path/to/image2.jpg'),
    // ... add more sample products for display
  ];

  constructor(private http: HttpClient) { }

  getProducts(): Product[] {
    return this.mockProducts;
  }

  fetchProducts() {
    return this.http.get(this.endpoint);
  }
}
