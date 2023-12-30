import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe',
})
export class DatePipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);
    const formattedDate = `${('0' + (date.getMonth() + 1)).slice(-2)}/${(
      '0' + date.getDate()
    ).slice(-2)}/${date.getFullYear()} ${('0' + date.getHours()).slice(-2)}:${(
      '0' + date.getMinutes()
    ).slice(-2)}`;
    return formattedDate;
  }
}
