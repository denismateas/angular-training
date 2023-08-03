import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/modules/shopping-cart/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.scss'],
})
export class ShoppingCartDetailsComponent {
  constructor(private shoppingCartService: ShoppingCartService) {}

  shoppingCartDetails = this.shoppingCartService.getShoppingCartList();
}
