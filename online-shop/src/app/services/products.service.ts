import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductDetail } from '../modules/shared/types/products.types';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  productsList!: ProductDetail[];

  getProductsList(): Observable<ProductDetail[]> {
    if (this.productsList) return of(this.productsList);
    const request = this.http.get<ProductDetail[]>(
      environment.apiUrl + '/product'
    );
    return request.pipe(tap((products) => (this.productsList = products)));
  }

  getProduct(id: string): Observable<ProductDetail> {
    const request = this.http.get<ProductDetail>(
      environment.apiUrl + `/product/${id}`
    );
    return request;
  }
}
