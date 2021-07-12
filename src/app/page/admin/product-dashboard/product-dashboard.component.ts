import { ProductType } from './../../../productType';
import { productService } from './../../../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss'],
})
export class ProductDashboardComponent implements OnInit {
  products: ProductType[];
  constructor(private productService: productService) {}
  ngOnInit(): void {
    this.getAllProduct();
  }
  getAllProduct() {
    this.productService.getProducts().subscribe((data) =>{ this.products = data})
    ;
  }
}
