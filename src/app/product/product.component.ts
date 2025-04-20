import { Component } from "@angular/core";

@Component({
    selector:"product",
    templateUrl:"product.component.html",
    styleUrl:"product.component.css",
    providers:[]
})
export class ProductComponent
{
     productId:number=1;
     productName:string="Laptop"

}