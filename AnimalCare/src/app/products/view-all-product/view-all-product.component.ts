import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shoplayout/category';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartapiService } from 'src/app/Components/cartapi.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

 categoryList: Category|any;
  productData:Product|any;
  productList:any;
  constructor(private cartApi:CartapiService,private productsService:ProductService) { }

  ngOnInit(): void {
    this.productsService.getCategory().subscribe(data=>{
      this.categoryList=data;
    })
    this.productsService.viewAllProduct().subscribe(data =>{
      this.productData=data;
    })
    this.productsService.getProduct().subscribe((res: any)=>{
      this.productList=res;
      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      })
    })
  }
  addtoCart(item:any){
    this.cartApi.addToCart(item);
  }

}
