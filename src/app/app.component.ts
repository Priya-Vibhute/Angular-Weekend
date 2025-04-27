import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AdditionComponent } from './addition/addition.component';
import { PipeExamplesComponent } from './pipe-examples/pipe-examples.component';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { SwitchexampleComponent } from './switchexample/switchexample.component';
import { ParentComponent } from './parent/parent.component';
import { AttributedirectivesComponent } from './attributedirectives/attributedirectives.component';
import { ProfileComponent } from './profile/profile.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AboutComponent,ProductComponent,CategoryComponent,DataBindingComponent,AdditionComponent,PipeExamplesComponent,DirectivesExampleComponent,SwitchexampleComponent,ParentComponent,AttributedirectivesComponent,ProfileComponent,AComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
    firstName:string="Nisha"
}
