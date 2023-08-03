import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductForm } from 'src/app/modules/shared/types/productForm.types';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-form-view',
  templateUrl: './products-form-view.component.html',
  styleUrls: ['./products-form-view.component.scss'],
})
export class ProductsFormViewComponent {
  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService
  ) {}

  @Input() myForm!: FormGroup;

  productToBeAdded!: ProductForm;

  add(): void {
    this.productsService.addProduct(this.myForm);
  }
}
