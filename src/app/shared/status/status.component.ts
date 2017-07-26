import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'app/students';
import {MdChipsModule} from '@angular/material';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  @Input()
  homeworkTotal;


  constructor() { }

  ngOnInit() {
  }

}
