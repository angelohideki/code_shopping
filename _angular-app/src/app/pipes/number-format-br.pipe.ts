import { Pipe, PipeTransform } from '@angular/core';
import NumberFormat = Intl.NumberFormat;

@Pipe({
  name: 'numberFormatBr'
})
export class NumberFormatBrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(value);
  }

}
