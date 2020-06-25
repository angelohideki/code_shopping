import { Injectable } from '@angular/core';
import {ProductListComponent} from "../../product/product-list/product-list.component";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductInsertService {

  private  _productListComponent: ProductListComponent

  constructor(private notifyMessage: NotifyMessageService) {
  }

  set productListComponent(value: ProductListComponent){
    this._productListComponent = value;
  }

  showModalInsert() {
    this._productListComponent.productNewModal.showModal();
  }

  onInsertSuccess($event: any) {
    this.notifyMessage.success('Categoria cadastrada com sucesso.');
    console.log($event);
    this._productListComponent.getProducts();
  }

  onInsertError($event: HttpErrorResponse) {
    console.log($event);
  }
}
