import { Injectable } from '@angular/core';
import { ProductDetail } from '../modules/shared/types/products.types';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  addProduct(product: ProductDetail) {
    const itExists = JSON.parse(localStorage.getItem('itExists') || '{}') || [];
    console.log(itExists);
    itExists.push();
    localStorage.setItem('2', JSON.stringify(itExists));
  }
}
