import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CategoryNewModalComponent} from "../category-new-modal/category-new-modal.component";
import {CategoryEditModalComponent} from "../category-edit-modal/category-edit-modal.component";
import {CategoryDeleteModalComponent} from "../category-delete-modal/category-delete-modal.component";
import {CategoryHttpService} from "../../../../services/http/category-http.service";
import {Category} from "../../../../model";

declare let $;

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Array<Category> = [];

  @ViewChild(CategoryNewModalComponent)
  categoryNewModal: CategoryNewModalComponent;

  @ViewChild(CategoryEditModalComponent)
  categoryEditModal: CategoryEditModalComponent;

  @ViewChild(CategoryDeleteModalComponent)
  categoryDeleteModal: CategoryDeleteModalComponent;

  categoryId: number;

  constructor(private  http: HttpClient, public categoryHttp: CategoryHttpService) {

  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryHttp.list()
      .subscribe(response => {
        this.categories = response.data
      })
  }

  showModalInsert(){
      this.categoryNewModal.showModal();
  }

  showModalEdit(categoryId: number){
      this.categoryId = categoryId;
      this.categoryEditModal.showModal();
  }

  showModalDelete(categoryId: number) {
    this.categoryId = categoryId;
    this.categoryDeleteModal.showModal();
  }

  onInsertSuccess($event: any) {
      console.log($event);
      this.getCategories();
  }

  onInsertError($event: HttpErrorResponse) {
      console.log($event);
  }

  onEditSuccess($event: any) {
    console.log($event);
    this.getCategories();
  }

  onEditError($event: any) {
    console.log($event);
  }

  onDeleteSuccess($event: any) {
    console.log($event);
    this.getCategories();
  }

  onDeleteError($event: any) {
    console.log($event);
  }

}

