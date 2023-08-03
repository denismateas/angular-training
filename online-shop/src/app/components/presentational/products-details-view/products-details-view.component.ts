import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetail } from 'src/app/modules/shared/types/products.types';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-details-view',
  templateUrl: './products-details-view.component.html',
  styleUrls: ['./products-details-view.component.scss'],
})
export class ProductsDetailsViewComponent {
  constructor(private productsService: ProductsService) {}

  @Input() productDetail?: Observable<ProductDetail> | undefined;

  delete(id: string): void {
    this.productsService.deleteProduct(id);
  }
}
