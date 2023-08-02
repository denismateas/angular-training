import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetail } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-products-details-view',
  templateUrl: './products-details-view.component.html',
  styleUrls: ['./products-details-view.component.scss'],
})
export class ProductsDetailsViewComponent {
  @Input() productDetail?: Observable<ProductDetail> | undefined;
}
