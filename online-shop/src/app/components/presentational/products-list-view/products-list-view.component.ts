import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetail } from 'src/app/modules/shared/types/products.types';
import { ShoppingCartService } from 'src/app/modules/shopping-cart/services/shopping-cart.service';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrls: ['./products-list-view.component.scss'],
})
export class ProductsListViewComponent {
  constructor(private shoppingCartService: ShoppingCartService) {}

  @Input() productsList: Observable<ProductDetail[]> | undefined;

  addProduct(product: ProductDetail): void {
    return this.shoppingCartService.addProduct(product);
  }
}
