import { Student } from './../students';
import { Component, ViewChild, Input } from '@angular/core';
import {MdSlideToggleModule} from '@angular/material';
import { StudentService } from 'app/student/student.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent {
  color = 'accent';
  checked = false;
  disabled = false;

  students: Student[] = [];

  temp = [];

  constructor(private studentService: StudentService) {
    // cache our list
    this.studentService
      .getAllStudents()
      .subscribe(students => {
        this.temp = [...students];

        // push our inital complete list
        this.students = students;
      });
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
