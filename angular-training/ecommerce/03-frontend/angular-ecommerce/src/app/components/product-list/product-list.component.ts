import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentCategioryId: number = 1;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    })
  }

  listProducts() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // Tip: You can quickly convert string to number using '+' symbol
      // NOTE: The '!' symbol at the end asserts that this value is not null.
      this.currentCategioryId = +this.route.snapshot.paramMap.get('id')!;
    } else {
      this.currentCategioryId = 1;
    }

    this.productService.getProductList(this.currentCategioryId).subscribe(
      data => { this.products = data }
    )
  }

}
