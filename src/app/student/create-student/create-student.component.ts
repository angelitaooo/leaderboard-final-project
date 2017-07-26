import { Component, OnInit } from '@angular/core';
import { Student } from 'app/students';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { StudentService } from 'app/student/student.service';
import {MdCardModule} from '@angular/material';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
student: Student = new Student();

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location)
  {}

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  createStudent(formData) {
    const newDate = new Date();

    this.student.completed = false;
    this.student.photo = 'https://api.adorable.io/avatars/426';
    this.student.lastUpdated = newDate.toString();

    this.studentService
      .create(this.student)
      .subscribe(student => {
        this.location.back();
      });
  }


}
