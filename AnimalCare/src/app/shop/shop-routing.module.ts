import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllProductComponent } from '../products/view-all-product/view-all-product.component';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  { path: 'shop', component: ShopComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
