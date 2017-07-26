import { Student } from 'app/students';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()

export class StudentService {
studentsUrl = 'api/students';

constructor(private http: Http) { }

  getAllStudents(): Observable<Student[]> {
    return this.http
    .get(this.studentsUrl)
    .map(students => students.json().data as Student[])
    .do(students => console.log(students));
  }


  getStudent(studentId) {
    return this.http
    .get(`${this.studentsUrl}/${studentId}`)
    .map(student => student.json().data as Student)
    .do(student => console.log(student));
  }

}
