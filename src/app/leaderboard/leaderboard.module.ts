import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullTableComponent } from './full-table/full-table.component';
import { LeaderboardComponent } from './leaderboard.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule
  ],
  declarations: [FullTableComponent, LeaderboardComponent],
  exports: [LeaderboardComponent]
})
export class LeaderboardModule {}
