import { Injectable } from '@angular/core';
import { ProductDetail } from '../../shared/types/products.types';
import { ShoppingCartProduct } from 'src/app/modules/shared/types/shopping-cart-product.types';
import { ShoppingCartDetail } from '../../shared/types/shopping-cart.types';
import { ProductsService } from 'src/app/services/products.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(private productsService: ProductsService) {}

  shoppingCartList: ShoppingCartProduct[] = [];

  addProduct(product: ProductDetail): void {
    this.shoppingCartList = JSON.parse(
      localStorage.getItem('ShoppingCart') || '[]'
    );
    const cartItem = this.shoppingCartList.find(
      (shoppingCProduct: ShoppingCartProduct) =>
        shoppingCProduct.id === product.id
    );
    if (cartItem) {
      cartItem.quantity = cartItem.quantity + 1;
    } else {
      this.shoppingCartList.push({
        id: product.id,
        quantity: 1,
      });
    }
    localStorage.setItem('ShoppingCart', JSON.stringify(this.shoppingCartList));
  }

  getShoppingCartList(): ShoppingCartDetail[] {
    const shoppingCartList = JSON.parse(
      localStorage.getItem('ShoppingCart') || '[]'
    );
    for (let i = 0; i < shoppingCartList.length; i++) {
      this.productsService.getProductsList().subscribe((data) => {
        data.forEach((item) => {
          if (item.id == shoppingCartList[i].id) {
            shoppingCartList[i].name = item.name;
            shoppingCartList[i].categoryName = item.categoryName;
          }
        });
      });
    }
    return shoppingCartList;
  }

  deleteProductFromShoppingCart(shoppingCartProduct: ShoppingCartDetail): void {
    const newShoppingCartList = [];
    const shoppingCartList = JSON.parse(
      localStorage.getItem('ShoppingCart') || '[]'
    );
    for (let i = 0; i < shoppingCartList.length; i++) {
      if (shoppingCartList[i].id != shoppingCartProduct.id)
        newShoppingCartList.push(shoppingCartList[i]);
    }
    localStorage.setItem('ShoppingCart', JSON.stringify(newShoppingCartList));
  }
}
