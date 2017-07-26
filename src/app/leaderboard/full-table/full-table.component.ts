import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {DatatableComponent} from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-full-table',
  templateUrl: './full-table.component.html',
  styleUrls: ['./full-table.component.scss']
})
export class FullTableComponent implements OnInit {
  columns = [
    { prop: 'id' },
    { name: 'photo' },
    { name: 'fullName' },
    { name: 'averageGrade' },
    { name: 'Delivered Homeworks' },
    { name: 'missingHomeworks' },
    { name: 'completed' },
    { name: 'lastUpdated' }
  ];

  @Input()
   rows;

  @ViewChild(DatatableComponent) table: DatatableComponent;


  constructor() { }

  ngOnInit() {
  }

}
