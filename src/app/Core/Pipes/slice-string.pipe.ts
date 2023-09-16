import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceString'
})
export class SliceStringPipe implements PipeTransform {

  transform(title: string, limit: number): string {
    return title?.split(' ').slice(0, limit).join(' ');
  }

}
