
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MdSlideToggleModule} from '@angular/material';
import { StudentModule } from 'app/student/student.module';
import { SharedModule } from './../shared/shared.module';
import {MdChipsModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';

import { CompactTableComponent } from './compact-table/compact-table.component';
import { FullTableComponent } from './full-table/full-table.component';
import { LeaderboardComponent } from './leaderboard.component';

import { StudentService } from 'app/student/student.service';

import { HightlightDirective } from 'app/shared/hightlight.directive';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    MdSlideToggleModule,
    MdChipsModule,
    MdButtonModule,
    RouterModule,
    HttpModule,
    StudentModule,
    SharedModule
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
