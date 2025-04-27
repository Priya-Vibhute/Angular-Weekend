import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {

    @Input() data=""

    constructor()
    {
      console.log("B component constructor",this.data);
      
    }

    ngOnChanges(changes:SimpleChanges)
    {
      console.log("B component ngOnChanges Invoked",changes["data"]["previousValue"])
    }

    ngOnInit()
    {
      console.log("B component ngOnInit",this.data);


    }

    ngDoCheck()
    {
      console.log("B Component ngDoCheck"); 
    }

    ngOnDestroy()
    {
      console.log("Component destroyed");
      
    }


}
