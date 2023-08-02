import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetail } from 'src/app/modules/shared/types/products.types';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  constructor(private productsService: ProductsService) {}

  productsList!: Observable<ProductDetail[]>;

  ngOnInit(): Observable<ProductDetail[]> {
    return (this.productsList = this.productsService.getProductsList());
  }
}
