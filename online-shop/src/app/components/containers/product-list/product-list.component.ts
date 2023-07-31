import { Component } from '@angular/core';
import { getProductsDetail } from 'src/app/mocks/products.mocks';
import { ProductDetail } from 'src/app/modules/shared/types/products.types';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  constructor(private shoppingCartService: ShoppingCartService) {}

  productsList = getProductsDetail(30);

  shoppingCartList: ProductDetail[] | undefined;

  static getShoppingCartList: any;
}
