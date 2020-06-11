import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {CategoryHttpService} from "../../../../services/http/category-http.service";

@Component({
  selector: 'category-delete-modal',
  templateUrl: './category-delete-modal.component.html',
  styleUrls: ['./category-delete-modal.component.css']
})
export class CategoryDeleteModalComponent implements OnInit {

  category = null;

  _categoryId: number;

  @ViewChild(ModalComponent) modal: ModalComponent;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  constructor(private  http: HttpClient, public categoryHttp: CategoryHttpService) {

  }

  ngOnInit(): void {
  }

  @Input()
  set categoryId(value) {
      this._categoryId = value;
      if(this._categoryId){
        const token = window.localStorage.getItem('token');
        this.http.get<{data:any}>(`http://localhost:8000/api/categories/${value}`,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
          .subscribe((response) => this.category = response.data)
      }
  }

  destroy(){
    const  token = window.localStorage.getItem('token');
    this.http.delete(`http://localhost:8000/api/categories/${this._categoryId}`, {
      headers:{
        'Authorization' : `Bearer ${token}`
      }
    })
      .subscribe((category) => {
        this.onSuccess.emit(category);
        this.modal.hide();
      }, error => this.onError.emit(error));
  }
  showModal(){
    this.modal.show();
  }

}
