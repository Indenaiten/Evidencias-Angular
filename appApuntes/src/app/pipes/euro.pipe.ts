//IMPORTS
import { Pipe, PipeTransform } from '@angular/core';

//EURO PIPE
@Pipe({
  name: 'euro' //NAME OF PIPE
})
export class EuroPipe implements PipeTransform{

  transform(value: any, args?: any): any{
    //CONSTANTS
    const euro = value + "€";

    //RETURN EURO
    return euro;
  }

}//END OF EURO PIPE
