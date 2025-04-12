import { DatePipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NotavailablePipe } from '../notavailable.pipe';

@Component({
  selector: 'app-pipe-examples',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,NotavailablePipe,SlicePipe],
  templateUrl: './pipe-examples.component.html',
  styleUrl: './pipe-examples.component.css'
})
export class PipeExamplesComponent {

  name:string="abc"
  currentDate=new Date();

}
