import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import {MdCardModule} from '@angular/material';

import { StudentComponent } from 'app/student/student.component';
import { StudentService } from 'app/student/student.service';


const routes: Routes = [{
  path: 'student/:id', component: StudentComponent
}];

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    HttpModule
    // RouterModule.forChild(routes)
  ],
  declarations: [StudentComponent],
  exports: [StudentComponent],
  providers: [StudentService]
})
export class StudentModule { }
