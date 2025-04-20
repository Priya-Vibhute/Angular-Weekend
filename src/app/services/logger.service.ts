import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {


  msg(message:string,data?:any)
  {
     console.log(message,"Data",data||"No data provided");
     
  }

  error(message:string)
  {
      console.error(message)
  }

  constructor() { }
}
