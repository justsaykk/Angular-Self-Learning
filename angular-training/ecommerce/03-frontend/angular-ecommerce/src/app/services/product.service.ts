import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  /* By Default, Spring REST will return 20 items. One way to work around this is to add the 
  ** query "?size=x" where x is the number of items to return
  private baseUrl = "http://localhost:8080/api/products?size=100"; */
  private baseUrl = "http://localhost:8080/api/products";
  private categoryUrl = "http://localhost:8080/api/product-category";

  constructor(private httpClient: HttpClient) { }

  getProductList(theCategoryId: number): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(res => res._embedded.products)
    )
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(res => res._embedded.productCategory)
    )
  }

}

interface GetResponseProducts { // Unwraps JSON from REST API
  _embedded: {
    products: Product[];
  }
}

interface GetResponseProductCategory { // Unwraps JSON from REST API
  _embedded: {
    productCategory: ProductCategory[];
  }
}
