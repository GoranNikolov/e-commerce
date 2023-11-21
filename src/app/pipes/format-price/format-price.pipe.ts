import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})
export class FormatPricePipe implements PipeTransform {

  transform(price: number | undefined): string {
    if (price === undefined) {
      return '';
    }

    const formattedPrice = (price / 100).toFixed(2);
    return `$${formattedPrice}`;
  }

}
