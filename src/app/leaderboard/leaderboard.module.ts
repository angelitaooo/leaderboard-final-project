import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullTableComponent } from './full-table/full-table.component';
import { LeaderboardComponent } from './leaderboard.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CompactTableComponent } from './compact-table/compact-table.component';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule
  ],
  declarations: [FullTableComponent, LeaderboardComponent, CompactTableComponent],
  exports: [LeaderboardComponent]
})
export class LeaderboardModule {}
