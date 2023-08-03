import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss'],
})
export class ProductsFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService
  ) {}
  myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = this.fb.group({
      categoryId: '5733c530-5b0c-401f-8aed-2a1af36ef7ea',
      name: '',
      price: '',
      description: '',
      weight: '',
      imageUrl: '',
      categoryName: '',
      categoryDescription: 'new kitchen supplies',
    });
  }
}
