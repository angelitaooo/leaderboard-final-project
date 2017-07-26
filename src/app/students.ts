export class Student {
    id: number;
    fullName: string;
    photo: string;
    averageGrade: number;
    deliveredHomeworks: number;
    missingHomeworks: number;
    completed: boolean;
    lastUpdated: string;

    constructor({
      fullName = '',
      photo = 'https://api.adorable.io/avatars/426',
      averageGrade = 0,
      deliveredHomeworks = 0,
      missingHomeworks = 0,
      completed = false,
      lastUpdated = Date.toString()
    }) {
      this.fullName = fullName;
      this.photo = photo;
      this.averageGrade = averageGrade;
      this.deliveredHomeworks = deliveredHomeworks;
      this.missingHomeworks = missingHomeworks;
      this.completed = completed;
      this.lastUpdated = lastUpdated;
    }
}
