import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductResponseModel } from '../../models/productResponseModel';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {


  products:Product[]=[];
  apiURL="https://localhost:7113/api/Products/getall";
  productResponseModel:ProductResponseModel={
    data : this.products,
    message:"",
    success:true
  };
constructor(private httpClient:HttpClient){}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
this.httpClient.get<ProductResponseModel>(this.apiURL).subscribe((response) =>{
  this.products = response.data
});
  }
}
