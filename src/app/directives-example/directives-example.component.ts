import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  imports: [NgIf,NgFor],
  templateUrl: './directives-example.component.html',
  styleUrl: './directives-example.component.css'
})
export class DirectivesExampleComponent {
  loggedIn:boolean=false;
  status:boolean=false;
  subjects:string[]=["HTML","CSS","JS","SQL"]
  students=[
    {firstName:"Suvarna",lastName:"Kadam",marks:100},
    {firstName:"Amit",lastName:"Shukla",marks:100}
  ]

}
