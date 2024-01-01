import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'departurePipe',
})
export class DeparturePipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);
    date.setMinutes(date.getMinutes() - 30);

    const formattedTime = `${('0' + date.getHours()).slice(-2)}:${(
      '0' + date.getMinutes()
    ).slice(-2)}`;
    return formattedTime;
  }
}
