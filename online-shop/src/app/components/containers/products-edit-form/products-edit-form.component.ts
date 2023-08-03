import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ProductDetail } from 'src/app/modules/shared/types/products.types';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-edit-form',
  templateUrl: './products-edit-form.component.html',
  styleUrls: ['./products-edit-form.component.scss'],
})
export class ProductsEditFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  myForm!: FormGroup;
  id!: string;
  productDetail?: ProductDetail;

  ngOnInit(): void {
    this.productDetail = this.productsService.selectedProduct;

    this.myForm = this.fb.group({
      categoryId: '5733c530-5b0c-401f-8aed-2a1af36ef7ea',
      name: this.productDetail?.name,
      price: this.productDetail?.price,
      description: this.productDetail?.description,
      weight: '',
      imageUrl: '',
      categoryName: '',
      categoryDescription: 'new kitchen supplies',
    });

    this.id = String(this.route.snapshot.paramMap.get('id'));
  }
}
