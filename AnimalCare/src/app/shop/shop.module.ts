import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ShoplayoutModule } from '../shoplayout/shoplayout.module';
import { ProductsModule } from '../products/products.module';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [
    ShopComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    ShoplayoutModule,
    ProductsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ShopModule { }
