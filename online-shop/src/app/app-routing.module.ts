import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/containers/product-list/product-list.component';
import { ShoppingCartDetailsComponent } from './modules/shopping-cart/components/containers/shopping-cart-details/shopping-cart-details.component';
import { ProductDetailsComponent } from './components/containers/product-details/product-details.component';
import { ProductsFormComponent } from './components/containers/products-form/products-form.component';
import { ProductsEditFormComponent } from './components/containers/products-edit-form/products-edit-form.component';

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartDetailsComponent,
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'add-product',
    component: ProductsFormComponent,
  },
  {
    path: 'edit-product/:id',
    component: ProductsEditFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
