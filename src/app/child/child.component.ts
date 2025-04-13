import { Component, EventEmitter, Input, Output } from '@angular/core';


export interface Student
{
  id:number,
  name:string
}
@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

 @Output() eventemitter=new EventEmitter<string>();

 @Output()  student=new EventEmitter<Student>();

 @Input() receivedData:string="";

 sendMessage()
 {
    this.eventemitter.emit("Data from Child")
 }


 sendStudentData()
 {
     this.student.emit({id:101,name:"Nisha"})
 }

}
