import { Component, OnInit, ViewChild } from '@angular/core';
import {CategoryNewModalComponent} from "../category-new-modal/category-new-modal.component";
import {CategoryEditModalComponent} from "../category-edit-modal/category-edit-modal.component";
import {CategoryDeleteModalComponent} from "../category-delete-modal/category-delete-modal.component";
import {CategoryHttpService} from "../../../../services/http/category-http.service";
import {Category} from "../../../../model";
import {CategoryInsertService} from "./category-insert.service";
import {CategoryEditService} from "./category-edit.service";
import {CategoryDeleteService} from "./category-delete.service";

declare let $;

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Array<Category> = [];
  page = 1;
  @ViewChild(CategoryNewModalComponent)
  categoryNewModal: CategoryNewModalComponent;

  @ViewChild(CategoryEditModalComponent)
  categoryEditModal: CategoryEditModalComponent;

  @ViewChild(CategoryDeleteModalComponent)
  categoryDeleteModal: CategoryDeleteModalComponent;

  categoryId: number;

  constructor(private categoryHttp: CategoryHttpService,
              public categoryInsertService: CategoryInsertService,
              public categoryEditService: CategoryEditService,
              public categoryDeleteService: CategoryDeleteService) {
      this.categoryInsertService.categoryListComponent = this;
      this.categoryEditService.categoryListComponent = this;
      this.categoryDeleteService.categoryListComponent = this;
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryHttp.list()
      .subscribe(response => {
        this.categories = response.data
      })
  }

}


