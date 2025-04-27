import { Component } from '@angular/core';
import { BComponent } from '../b/b.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-a',
  imports: [BComponent,NgIf],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {

  dataFromParent=""
  count=0;

    changeData(data:string)
    {
      this.dataFromParent=data;
    }

    increment()
    {
      this.count++;
    }


}
