import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
