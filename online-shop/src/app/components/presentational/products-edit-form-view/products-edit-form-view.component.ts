import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductForm } from 'src/app/modules/shared/types/productForm.types';
import { ProductDetail } from 'src/app/modules/shared/types/products.types';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-edit-form-view',
  templateUrl: './products-edit-form-view.component.html',
  styleUrls: ['./products-edit-form-view.component.scss'],
})
export class ProductsEditFormViewComponent {
  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService
  ) {}

  @Input() myForm!: FormGroup;
  @Input() id!: string;
  @Input() productDetail?: ProductDetail;

  productToBeAdded!: ProductForm;

  update(): void {
    this.productsService.updateProduct(this.id, this.myForm);
  }
}
