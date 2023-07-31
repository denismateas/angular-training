import { Component } from '@angular/core';
import { getShoppingCartDetails } from 'src/app/mocks/shopping-cart.mocks';
import { ShoppingCartDetail } from 'src/app/modules/shared/types/shopping-cart.types';
import { ProductListComponent } from 'src/app/components/containers/product-list/product-list.component';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.scss'],
})
export class ShoppingCartDetailsComponent {
  shoppingCartDetails = getShoppingCartDetails(30);
}
