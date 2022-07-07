import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/shoplayout/category';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartapiService } from 'src/app/Components/cartapi.service';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productID=0;
  categoryList: Category|any;
  productData:Product|any;
  productList:any;
  constructor(private cartApi:CartapiService,private activatedRoute: ActivatedRoute,private productsService:ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID=data['id'];
    })
    //for sidebar
    this.productsService.getCategory().subscribe(data=>{
      this.categoryList=data;
    })
    //for product
    this.productsService.viewProduct(this.productID).subscribe(viewData=>{
      this.productData=viewData;
    })
    //add to cart
    this.productsService.getProduct().subscribe((res: any)=>{
      this.productList=res;
      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      })
    })
  }
  //for add to cart
  addtoCart(item:any){
    this.cartApi.addToCart(item);
  }

}
