import { Injectable } from '@angular/core';
import {ProductListComponent} from "../../product/product-list/product-list.component";
import {NotifyMessageService} from "../../../../services/notify-message.service";

@Injectable({
  providedIn: 'root'
})
export class ProductEditService {

  private  _productListComponent: ProductListComponent

  constructor(private notifyMessage: NotifyMessageService) {
  }

  set productListComponent(value: ProductListComponent){
    this._productListComponent = value;
  }

  showModalEdit(productId: number) {
    this._productListComponent.productId = productId;
    this._productListComponent.productEditModal.showModal();
  }

  onEditSuccess($event: any) {
    console.log($event);
    this._productListComponent.getProducts();
  }

  onEditError($event: any) {
    console.log($event);
  }t

}
