import { Component, Input } from '@angular/core';
import { ShoppingCartDetail } from 'src/app/modules/shared/types/shopping-cart.types';
import { ShoppingCartService } from 'src/app/modules/shopping-cart/services/shopping-cart.service';
@Component({
  selector: 'app-shopping-cart-details-view',
  templateUrl: './shopping-cart-details-view.component.html',
  styleUrls: ['./shopping-cart-details-view.component.scss'],
})
export class ShoppingCartDetailsViewComponent {
  constructor(private shoppingCartService: ShoppingCartService) {}
  @Input() shoppingCartDetails?: ShoppingCartDetail[] | undefined;

  deleteProductFromShoppingCart(shopping: ShoppingCartDetail): void {
    return this.shoppingCartService.deleteProductFromShoppingCart(shopping);
  }
}
