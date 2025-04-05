import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
    firstname:string="Amit"
    lastname:string="Shukla"
    age:number=21

    showAlert()
    {
       alert("Event Binding")
    }

}
