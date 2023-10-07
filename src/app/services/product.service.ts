import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private mockProducts: Product[] = [
    new Product(1, 'Product 1', 'Description for product 1', 99.99, 'path/to/image1.jpg'),
    new Product(2, 'Product 2', 'Description for product 2', 89.99, 'path/to/image2.jpg'),
    // ... add more sample products for display
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.mockProducts;
  }
}
