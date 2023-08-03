import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductDetail } from '../modules/shared/types/products.types';
import { Observable, of, tap } from 'rxjs';
import { ProductForm } from '../modules/shared/types/productForm.types';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient, private router: Router) {}

  productsList?: ProductDetail[];

  selectedProduct?: ProductDetail;

  newProductToBeAdded!: ProductDetail;

  productToBeAdded!: ProductForm;

  getProductsList(): Observable<ProductDetail[]> {
    if (this.productsList) return of(this.productsList);

    const request = this.http.get<ProductDetail[]>(
      environment.apiUrl + '/product'
    );

    return request.pipe(tap((products) => (this.productsList = products)));
  }

  getProduct(id: string): Observable<ProductDetail> {
    const request = this.http
      .get<ProductDetail>(environment.apiUrl + `/product/${id}`)
      .pipe(tap((data) => (this.selectedProduct = data)));

    return request;
  }

  addProduct(myForm: FormGroup): void {
    this.productToBeAdded = {
      id: '',
      name: myForm.controls['name']?.value,
      price: myForm.controls['price']?.value,
      description: myForm.controls['description']?.value,
      weight: 2,
      categoryDescription: 'new kitchen supplies',
      categoryName: 'kitchen',
      imageUrl: '',
      categoryId: '5733c530-5b0c-401f-8aed-2a1af36ef7ea',
    };

    this.newProductToBeAdded = {
      name: this.productToBeAdded.name,
      price: this.productToBeAdded.price,
      categoryName: this.productToBeAdded.categoryName,
      description: this.productToBeAdded.description,
      id: '',
    };

    this.http
      .post<ProductDetail>(
        environment.apiUrl + '/product',
        this.productToBeAdded
      )
      .subscribe((res) => {
        this.newProductToBeAdded.id = res.id;
      });

    this.productsList?.push(this.newProductToBeAdded);

    alert('Product added successfully');
  }

  updateProduct(id: string, myForm: FormGroup): void {
    this.productToBeAdded = {
      name: myForm.controls['name']?.value,
      price: myForm.controls['price']?.value,
      description: myForm.controls['description']?.value,
      weight: 2,
      categoryDescription: 'new kitchen supplies',
      categoryName: 'kitchen',
      imageUrl: myForm.controls['imageUrl']?.value,
      categoryId: '5733c530-5b0c-401f-8aed-2a1af36ef7ea',
    };

    this.newProductToBeAdded = {
      name: this.productToBeAdded.name,
      price: this.productToBeAdded.price,
      categoryName: this.productToBeAdded.categoryName,
      description: this.productToBeAdded.description,
      id: id,
    };

    this.http
      .put<unknown>(
        environment.apiUrl + '/product?id=' + id,
        this.productToBeAdded
      )
      .subscribe();

    this.productsList = undefined;

    alert('Product updated successfully');
  }

  deleteProduct(id: string): void {
    this.http
      .delete<unknown>(environment.apiUrl + '/product?id=' + id)
      .subscribe();

    this.productsList?.splice(
      this.productsList.findIndex((data) => data.id == id)
    );

    alert('Product deleted successfully');
  }
}
