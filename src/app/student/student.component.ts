import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { StudentService } from 'app/student/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  // @Input()
  student;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
        const studentId = params.get('id');
        if (studentId) {
          this.student = this.studentService.getStudent(+studentId);
        }
      })
  }

}
