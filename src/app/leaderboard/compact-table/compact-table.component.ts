import { Component, OnInit, Input, ViewChild } from '@angular/core';

import {DatatableComponent} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-compact-table',
  templateUrl: './compact-table.component.html',
  styleUrls: ['./compact-table.component.scss']
})
export class CompactTableComponent implements OnInit {
columns = [
    { prop: 'id' },
    { name: 'photo' },
    { name: 'fullName' },
    { name: 'averageGrade' },
    { name: 'completed' }
  ];

  @Input()
   rows;

  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor() { }

  ngOnInit() {
  }
}
