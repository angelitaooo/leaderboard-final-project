import { StatusComponent } from './../shared/status/status.component';
import { Student } from './../students';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { StudentService } from 'app/student/student.service';
import {MdCardModule} from '@angular/material';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  // @Input()
  student: Student;
  editing = false;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location
  ) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
        const studentId = params.get('id');
        if (studentId) {
          this.studentService
            .getStudent(+studentId)
            .subscribe(student => {
              this.student = student;
            });
        }
      })
  }

  goBack(): void {
    this.location.back();
  }

  deleteStudent(studentId) {
    this.studentService
      .delete(+studentId)
      .subscribe(student => {
        this.location.back();
      });
  }

  editStudent(formData) {
    if (this.editing) {
      const newDate = new Date();
      const newStudent = formData.value;
      const updatedStudent = Object.assign({}, this.student, newStudent, { lastUpdated: newDate.toString() });

      this.studentService
        .update(updatedStudent)
        .subscribe(student => {
          this.student = updatedStudent;
        });
    }

    this.editing = !this.editing;
  }


}










