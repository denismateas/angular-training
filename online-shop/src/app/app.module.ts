import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './components/containers/product-details/product-details.component';
import { ProductListComponent } from './components/containers/product-list/product-list.component';
import { ProductsDetailsViewComponent } from './components/presentational/products-details-view/products-details-view.component';
import { ProductsListViewComponent } from './components/presentational/products-list-view/products-list-view.component';
import { IconButtonComponent } from './modules/shared/components/presentational/icon-button/icon-button.component';
import { ShoppingCartDetailsViewComponent } from './modules/shopping-cart/components/presentational/shopping-cart-details-view/shopping-cart-details-view.component';
import { ShoppingCartDetailsComponent } from './modules/shopping-cart/components/containers/shopping-cart-details/shopping-cart-details.component';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';
import { ProductsFormComponent } from './components/containers/products-form/products-form.component';
import { ProductsEditFormComponent } from './components/containers/products-edit-form/products-edit-form.component';
import { ProductsFormViewComponent } from './components/presentational/products-form-view/products-form-view.component';
import { ProductsEditFormViewComponent } from './components/presentational/products-edit-form-view/products-edit-form-view.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductsDetailsViewComponent,
    ProductsListViewComponent,
    ShoppingCartDetailsViewComponent,
    ShoppingCartDetailsComponent,
    ProductsFormComponent,
    ProductsEditFormComponent,
    ProductsFormViewComponent,
    ProductsEditFormViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconButtonComponent,
    ShoppingCartModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
