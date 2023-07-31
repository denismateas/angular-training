import { Component, Input } from '@angular/core';
import { ProductDetail } from 'src/app/modules/shared/types/products.types';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrls: ['./products-list-view.component.scss'],
})
export class ProductsListViewComponent {
  @Input() productsList: ProductDetail[] | undefined;
  static shoppingCartService = new ShoppingCartService();
  addProduct(product: ProductDetail) {
    return ProductsListViewComponent.shoppingCartService.addProduct(product);
  }
}
