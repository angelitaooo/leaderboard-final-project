import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
     {
    id: 1,
    fullName: "Angela Ordonez",
    photo: "https://api.adorable.io/avatars/420",
    averageGrade: 5,
    deliveredHomeworks: 6,
    missingHomeworks: 0,
    completed: false,
    lastUpdated: "Tue Jul 25 2017 21:03:54 GMT-0500 (-05)"
  },
  {
    id: 2,
    fullName: "Angela Ordonez",
    photo: "https://api.adorable.io/avatars/421",
    averageGrade: 5,
    deliveredHomeworks: 6,
    missingHomeworks: 0,
   completed: true,
    lastUpdated: "Tue Jul 25 2017 21:03:54 GMT-0500 (-05)"
  },
  {
    id: 3,
    fullName: "Juan Herrera",
    photo: "https://api.adorable.io/avatars/422",
    averageGrade: 4,
    deliveredHomeworks: 3,
    missingHomeworks: 3,
   completed: false,
    lastUpdated: "Tue Jul 25 2017 21:03:54 GMT-0500 (-05)"
  },
  {
    id: 4,
    fullName: "Laura Ciro",
    photo: "https://api.adorable.io/avatars/423",
    averageGrade: 2,
    deliveredHomeworks: 4,
    missingHomeworks: 2,
   completed: true,
    lastUpdated: "Tue Jul 25 2017 21:03:54 GMT-0500 (-05)"
  },
  {
    id: 5,
    fullName: "Ricardo Rojas",
    photo: "https://api.adorable.io/avatars/424",
    averageGrade: 3,
    deliveredHomeworks: 2,
    missingHomeworks: 4,
   completed: false,
    lastUpdated: "Tue Jul 25 2017 21:03:54 GMT-0500 (-05)"
  }
    ];
    return {students};
  }
}
