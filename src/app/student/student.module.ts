import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {MdCardModule} from '@angular/material';

import { StudentComponent } from 'app/student/student.component';
import { StudentService } from 'app/student/student.service';
import { CreateStudentComponent } from './create-student/create-student.component';


const routes: Routes = [{
  path: 'student/:id', component: StudentComponent
}];

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    HttpModule,
    FormsModule
    // RouterModule.forChild(routes)
  ],
  declarations: [StudentComponent, CreateStudentComponent],
  exports: [StudentComponent],
  providers: [StudentService]
})
export class StudentModule { }
