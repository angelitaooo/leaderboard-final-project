import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MdSlideToggleModule} from '@angular/material';
import { StudentModule } from 'app/student/student.module';

import { CompactTableComponent } from './compact-table/compact-table.component';
import { FullTableComponent } from './full-table/full-table.component';
import { LeaderboardComponent } from './leaderboard.component';



@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    MdSlideToggleModule,
    StudentModule
  ],
  declarations: [FullTableComponent, LeaderboardComponent, CompactTableComponent],
  exports: [LeaderboardComponent]
})
export class LeaderboardModule {}
