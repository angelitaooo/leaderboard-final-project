import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { StudentComponent } from 'app/student/student.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from 'app/student/create-student/create-student.component';


import { AppComponent } from './app.component';

import { LeaderboardModule } from 'app/leaderboard/leaderboard.module';
import { StudentModule } from 'app/student/student.module';

import {HightlightDirective} from 'app/shared/hightlight.directive';

const routes: Routes = [
  { path: 'student/new', component: CreateStudentComponent },
  { path: 'student/:id', component: StudentComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  {
    path: '',
    redirectTo: '/leaderboard',
    pathMatch: 'full'
  },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LeaderboardModule,
    StudentModule,
    RouterModule.forRoot(routes),
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
