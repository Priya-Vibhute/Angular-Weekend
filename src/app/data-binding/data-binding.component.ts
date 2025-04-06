import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
    firstname:string="Amit"
    lastname:string="Shukla"
    age:number=21
    color:string="plum"
    border:string="2px solid black"

    showAlert()
    {
       alert("Event Binding")
    }

}
