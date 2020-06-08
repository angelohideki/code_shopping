import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';

declare const $;

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output()
  onHide: EventEmitter<Event> = new EventEmitter<Event>();

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    const jqueryElement = this.getQueryElement();

    jqueryElement.find('[modal-title]').addClass('modal-title');
    jqueryElement.find('[modal-body]').addClass('modal-body');
    jqueryElement.find('[modal-footer]').addClass('modal-footer');

    jqueryElement.on('hidden.bs.modal', (e) => {
      console.log(e);
      this.onHide.emit(e);
    });
  }

  show(){
    this.getQueryElement().modal('show');
  }

  hide(){
    this.getQueryElement().modal('hide');
  }

  private getQueryElement(){
    const nativeElement = this.element.nativeElement;
    return $(nativeElement.firstChild);
  }
}
