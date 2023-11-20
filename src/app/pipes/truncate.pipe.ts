import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number, completeWords?: boolean): string {
    if (value) {
      if (completeWords) {
        return this.truncateCompleteWords(value, limit);
      } else {
        return this.truncateByCharacters(value, limit);
      }
    }
    return value;
  }

  private truncateCompleteWords(value: string, limit: number): string {
    const words = value.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return value;
  }

  private truncateByCharacters(value: string, limit: number): string {
    if (value.length > limit) {
      return value.substring(0, limit) + '...';
    }
    return value;
  }
}
