import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {CategoryHttpService} from "../../../../services/http/category-http.service";
import {Category} from "../../../../model";

@Component({
  selector: 'category-delete-modal',
  templateUrl: './category-delete-modal.component.html',
  styleUrls: ['./category-delete-modal.component.css']
})
export class CategoryDeleteModalComponent implements OnInit {

  category: Category = null;

  _categoryId: number;

  @ViewChild(ModalComponent) modal: ModalComponent;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  constructor(public categoryHttp: CategoryHttpService) {

  }

  ngOnInit(): void {
  }

  @Input()
  set categoryId(value) {
      this._categoryId = value;
      if(this._categoryId){
        this.categoryHttp
          .get(this._categoryId)
          .subscribe(category => this.category = category)
      }
  }

  destroy(){
      this.categoryHttp
        .destroy(this._categoryId)
        .subscribe((category) => {
          this.onSuccess.emit(category);
          this.modal.hide();
        }, error => this.onError.emit(error));
  }

  showModal(){
    this.modal.show();
  }

}
