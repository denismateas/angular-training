import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductsDetailsViewComponent,
    ProductsListViewComponent,
    ShoppingCartDetailsViewComponent,
    ShoppingCartDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconButtonComponent,
    ShoppingCartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
