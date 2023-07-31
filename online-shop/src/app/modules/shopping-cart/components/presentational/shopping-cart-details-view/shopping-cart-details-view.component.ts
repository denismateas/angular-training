import { Component, Input } from '@angular/core';
import { ShoppingCartDetail } from 'src/app/modules/shared/types/shopping-cart.types';

@Component({
  selector: 'app-shopping-cart-details-view',
  templateUrl: './shopping-cart-details-view.component.html',
  styleUrls: ['./shopping-cart-details-view.component.scss'],
})
export class ShoppingCartDetailsViewComponent {
  @Input() shoppingCartDetails: ShoppingCartDetail[] | undefined;
}
