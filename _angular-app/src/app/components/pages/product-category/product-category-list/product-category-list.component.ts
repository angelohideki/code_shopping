import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Category, Product, ProductCategory} from "../../../../model";
import {ProductHttpService} from "../../../../services/http/product-http.service";
import {ProductCategoryHttpService} from "../../../../services/http/product-category-http.service";
import {CategoryHttpService} from "../../../../services/http/category-http.service";

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.css']
})
export class ProductCategoryListComponent implements OnInit {

  productId: number;
  product: Product = null;
  productCategory: ProductCategory = null;
  categories: Category[] = [];
  categoriesId:number[] = [];
  constructor(private route: ActivatedRoute,
              private productHttp: ProductHttpService,
              private productCategoryHttp: ProductCategoryHttpService,
              private categoryHttp: CategoryHttpService) { }

  ngOnInit() {
      this.getCategories();
      this.route.params.subscribe(params => {
          this.productId = params.product;
          this.getProduct();
          this.getProductCategory();
      });
  }

  change(){
    console.log(this.categoriesId)
  }
  getCategories(){
      this.categoryHttp.list(1)
        .subscribe(response => {
            this.categories = response.data;
        })
  }

  getProduct(){
      this.productHttp
        .get(this.productId)
        .subscribe(product => this.product = product);
  }

  getProductCategory(){
    this.productCategoryHttp
      .list(this.productId)
      .subscribe(productCategory => {
        this.productCategory = productCategory;
    })
  }

  submit(){
    const categoriesId = this.mergeCategories();
    this.productCategoryHttp
      .create(this.productId,categoriesId)
      .subscribe(productCategory => this.getProductCategory());
    return false;
  }

  private mergeCategories(): number[]{
    const categoriesId = this.productCategory.categories.map((category) => category.id);
    const newCategoriesId = this.categoriesId.filter((category) => {
      return categoriesId.indexOf(category) == -1;
    });
    return categoriesId.concat(newCategoriesId);

  }

}
