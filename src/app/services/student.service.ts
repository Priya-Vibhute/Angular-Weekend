import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

  students=[
    {firstName:"Suvarna",lastName:"Kadam",marks:100},
    {firstName:"Amit",lastName:"Shukla",marks:100}
  ]

  
  

  constructor() { }
}
