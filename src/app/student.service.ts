import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const data = [
  {
    "id": 1,
    "fullName": "Angela Ordonez",
    "photo": "http://www.clinicajoaquimmira.com/zArchives/Photos/Staff/c58f5920458ea458d7772d3b4011129a.png?width=220&height=220&crop=auto",
    "averageGrade": 5,
    "deliveredHomeworks": 6,
    "missingHomeworks": 0,
    "completed": false,
    "lastUpdated": "2017-07-23T22:22:09.981Z"
  },
  {
    "id": 2,
    "fullName": "Angela Ordonez",
    "photo": "http://www.clinicajoaquimmira.com/zArchives/Photos/Staff/c58f5920458ea458d7772d3b4011129a.png?width=220&height=220&crop=auto",
    "averageGrade": 5,
    "deliveredHomeworks": 6,
    "missingHomeworks": 0,
    "completed": true,
    "lastUpdated": "2017-07-23T22:22:09.981Z"
  },
  {
    "id": 3,
    "fullName": "Juan Herrera",
    "photo": "http://www.clinicajoaquimmira.com/zArchives/Photos/Staff/c58f5920458ea458d7772d3b4011129a.png?width=220&height=220&crop=auto",
    "averageGrade": 4,
    "deliveredHomeworks": 3,
    "missingHomeworks": 3,
    "completed": false,
    "lastUpdated": "2017-07-23T22:22:09.981Z"
  },
  {
    "id": 4,
    "fullName": "Laura Ciro",
    "photo": "http://www.clinicajoaquimmira.com/zArchives/Photos/Staff/c58f5920458ea458d7772d3b4011129a.png?width=220&height=220&crop=auto",
    "averageGrade": 2,
    "deliveredHomeworks": 4,
    "missingHomeworks": 2,
    "completed": true,
    "lastUpdated": "2017-07-23T22:22:09.981Z"
  },
  {
    "id": 5,
    "fullName": "Ricardo Rojas",
    "photo": "http://www.clinicajoaquimmira.com/zArchives/Photos/Staff/c58f5920458ea458d7772d3b4011129a.png?width=220&height=220&crop=auto",
    "averageGrade": 3,
    "deliveredHomeworks": 2,
    "missingHomeworks": 4,
    "completed": false,
    "lastUpdated": "2017-07-23T22:22:09.981Z"
  }
];

@Injectable()

export class StudentService {

  getAllStudents() {
    return data;
  }

  getStudent(studentId) {
    return data.find(student => student.id === studentId);
  }

}