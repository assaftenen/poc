import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit, OnChanges {
  @Input()
   animateData: any[];
  constructor() { }

  ngOnInit() {
   this.animateData =  this.animateData.map(item => ({...item, ...{ 'date': new Date()} } ));
  
  }

  ngOnChanges(change: SimpleChanges) {
    console.log(change);
  }

}
