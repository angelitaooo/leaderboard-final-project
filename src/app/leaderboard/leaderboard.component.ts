import { Component, ViewChild, Input } from '@angular/core';
import {MdSlideToggleModule} from '@angular/material';
import { StudentService } from 'app/student.service';
@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent {
  color = 'accent';
  checked = false;
  disabled = false;

  students = [];

  temp = [];



  constructor(private studentService: StudentService) {
    // cache our list
    this.temp = [...this.studentService.getAllStudents()];

    // push our inital complete list
    this.students = this.studentService.getAllStudents();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.fullName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.students = temp;
    // Whenever the filter changes, always go back to the first page
  }

  toggleView() {
    this.checked = !this.checked;
  }

}
