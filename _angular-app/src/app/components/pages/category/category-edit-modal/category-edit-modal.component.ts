import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {Category} from "../../../../model";
import {CategoryHttpService} from "../../../../services/http/category-http.service";

@Component({
  selector: 'category-edit-modal',
  templateUrl: './category-edit-modal.component.html',
  styleUrls: ['./category-edit-modal.component.css']
})
export class CategoryEditModalComponent implements OnInit {

  category: Category = {
    name: '',
    active: true
  };

  _categoryId: number;

  @ViewChild(ModalComponent) modal: ModalComponent;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  constructor(private categoryHttp: CategoryHttpService) { }

  ngOnInit(): void {
  }

  @Input()
  set categoryId(value){
      this._categoryId = value;
      if(this._categoryId){
        this.categoryHttp
          .get(this._categoryId)
          .subscribe(
            category => this.category = category,
            responseError => {
              if(responseError.status == 401){
                this.modal.hide();
              }
            })
      }
  }

  submit(){
    this.categoryHttp
      .update(this._categoryId, this.category)
      .subscribe((category) => {
        this.onSuccess.emit(category);
        this.modal.hide();
      }, error => this.onError.emit(error));
  }

  showModal(){
    this.modal.show();
  }

  hideModal($event: Event){
    //Fazer algo quando o modal foi fechado
    console.log($event);
  }

}
