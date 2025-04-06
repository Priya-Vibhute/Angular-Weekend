import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addition',
  imports: [FormsModule],
  templateUrl: './addition.component.html',
  styleUrl: './addition.component.css'
})
export class AdditionComponent {

  firstNum:number=0;
  secondNum:number=0;

  sum()
  {
    return this.firstNum+this.secondNum;
  }

}
