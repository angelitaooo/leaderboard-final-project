import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MdSlideToggleModule} from '@angular/material';
import { StudentModule } from 'app/student/student.module';

import { CompactTableComponent } from './compact-table/compact-table.component';
import { FullTableComponent } from './full-table/full-table.component';
import { LeaderboardComponent } from './leaderboard.component';

import { StudentService } from 'app/student.service';
const routes: Routes = [{
  path: 'leaderboard', component: LeaderboardComponent
}];

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    MdSlideToggleModule,
    StudentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    FullTableComponent,
    LeaderboardComponent,
    CompactTableComponent
  ],
  exports: [LeaderboardComponent],
  providers: [StudentService]
})
export class LeaderboardModule {}
