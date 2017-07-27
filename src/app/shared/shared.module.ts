import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdChipsModule} from '@angular/material';
import { StatusComponent } from './status/status.component';
import { HightlightDirective } from './hightlight.directive';


@NgModule({
  imports: [
    CommonModule,
    MdChipsModule
  ],
  declarations: [StatusComponent, HightlightDirective],
  exports: [StatusComponent, HightlightDirective]
})
export class SharedModule { }
