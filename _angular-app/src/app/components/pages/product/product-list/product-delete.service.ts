import { Injectable } from '@angular/core';
import {ProductListComponent} from "../../product/product-list/product-list.component";
import {NotifyMessageService} from "../../../../services/notify-message.service";

@Injectable({
  providedIn: 'root'
})
export class ProductDeleteService {

  private  _productListComponent: ProductListComponent

  constructor(private notifyMessage: NotifyMessageService) {
  }

  set productListComponent(value: ProductListComponent){
    this._productListComponent = value;
  }


  showModalDelete(productId: number) {
    this._productListComponent.productId = productId;
    this._productListComponent.productDeleteModal.showModal();
  }

  onDeleteSuccess($event: any) {
    console.log($event);
    this._productListComponent.getProducts();
  }

  onDeleteError($event: any) {
    this.notifyMessage.error('Não foi possível excluir o produto! Verifique.')
  }

}
