import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from 'app/student/student.component';
import { StudentService } from 'app/student.service';

const routes: Routes = [{
  path: 'student/:id', component: StudentComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentComponent],
  exports: [StudentComponent],
  providers: [StudentService]
})
export class StudentModule { }
