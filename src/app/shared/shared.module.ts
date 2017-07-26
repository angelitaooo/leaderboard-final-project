import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdChipsModule} from '@angular/material';
import { StatusComponent } from './status/status.component';


@NgModule({
  imports: [
    CommonModule,
    MdChipsModule
  ],
  declarations: [StatusComponent],
  exports: [StatusComponent]
})
export class SharedModule { }
