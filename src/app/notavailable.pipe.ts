import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notavailable'
})
// {{"" | notavailable }}
export class NotavailablePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value=="")
      return "NA"
    else
      return value
  }

}
