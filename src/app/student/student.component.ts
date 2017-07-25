import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { StudentService } from 'app/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  @Input()
  student;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.studentService.getStudent(+params.get('id')))
      .subscribe(student => {
        this.student = student
      });
  }

}
