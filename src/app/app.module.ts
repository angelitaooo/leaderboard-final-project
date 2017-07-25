import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';

import { LeaderboardModule } from 'app/leaderboard/leaderboard.module';
import { StudentModule } from 'app/student/student.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/leaderboard',
    pathMatch: 'full'
  }
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
    InMemoryWebApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
