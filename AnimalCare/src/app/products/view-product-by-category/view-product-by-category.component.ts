import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartapiService } from 'src/app/Components/cartapi.service';
import { Category } from 'src/app/shoplayout/category';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {

  categoryList: Category|any;
  productList1:Product|any;
  searchCategory:Category|any;

  productList:any;

  constructor(private cartApi:CartapiService,private productsService:ProductService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    //for sidebar 
    this.productsService.getCategory().subscribe(data=>{
      this.categoryList=data;
    })
    //to get product by category
    this.activatedRoute.params.subscribe(data=>{
     
      this.searchCategory=data['id'];
      console.log(data['id']);
     })
    this.productsService.searchCategoryProduct(this.searchCategory).subscribe(categoryData=>{
      console.log(categoryData);
      this.productList1=categoryData;
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
