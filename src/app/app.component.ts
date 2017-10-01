import { HttpErrorResponse } from '@angular/common/http';
import { ProductsService } from './shared/services/products.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  data: any;
  tableFlag = true;
  constructor (private productService: ProductsService) {

}

ngOnInit() {
 this.productService.getProducts().subscribe(data => {
   this.data = data['anime-staff-position'];
  console.log(this.data); }, (err: HttpErrorResponse) => {
  if (err.error instanceof Error) {
    console.log('Client-side error occured.');
  } else {
    console.log('Server-side error occured');
  }
});
}

public get animateData(): any {
  return this.data;
}
onButtonToggle(event) {
debugger;
this.tableFlag = !this.tableFlag;
}
}
