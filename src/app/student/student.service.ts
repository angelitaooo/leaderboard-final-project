import { Student } from 'app/students';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class StudentService {
  private headers = new Headers({'Content-Type': 'application/json'});
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

  delete(studentId: number) {
    const url = `${this.studentsUrl}/${studentId}`;
    return this.http.delete(url, {headers: this.headers});
  }

  update(studentData) {
    const url = `${this.studentsUrl}/${studentData.id}`;

    return this.http
    .put(url, JSON.stringify(studentData), { headers: this.headers })
    .map(response => response);

  }

  save(studentData) {
    return this.http
      .post(this.studentsUrl, JSON.stringify(studentData), { headers: this.headers })
      .map(response => response);
  }

}













