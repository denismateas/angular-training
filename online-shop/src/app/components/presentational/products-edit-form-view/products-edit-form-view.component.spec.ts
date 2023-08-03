import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsEditFormViewComponent } from './products-edit-form-view.component';

describe('ProductsEditFormViewComponent', () => {
  let component: ProductsEditFormViewComponent;
  let fixture: ComponentFixture<ProductsEditFormViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsEditFormViewComponent]
    });
    fixture = TestBed.createComponent(ProductsEditFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
