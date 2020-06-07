import {Component, ElementRef, OnInit} from '@angular/core';

declare const $;

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
  }

  show(){
    this.getQueryElement().modal('show');
  }

  hide(){
    this.getQueryElement().modal('hide')
  }

  private getQueryElement(){
    const nativeElement = this.element.nativeElement;
    return $(nativeElement.firstChild);
  }
}
