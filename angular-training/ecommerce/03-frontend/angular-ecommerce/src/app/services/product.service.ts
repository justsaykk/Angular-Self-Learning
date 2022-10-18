import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../common/product';


@Injectable({
  providedIn: 'root'
})
  
export class ProductService {

  private baseUrl = "http://localhost:8080/api/products";

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(res => res._embedded.products)
    )
  }
}

interface GetResponse { // Unwraps JSON from REST API
  _embedded: {
    products: Product[];
  }
}
