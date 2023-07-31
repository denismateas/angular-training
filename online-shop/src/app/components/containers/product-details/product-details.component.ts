import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  getProductDetail,
  getProductsDetail,
} from 'src/app/mocks/products.mocks';
import { ProductDetail } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productDetail: ProductDetail | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProductsDetails();
  }
  nullUndefined(text: string | null) {
    if (text == null) return undefined;
    return text;
  }
  getProductsDetails(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.productDetail = getProductDetail(this.nullUndefined(name));
  }
}
