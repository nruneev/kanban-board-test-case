import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ColumnComponent} from "./column.component";
import {TaskModule} from "../task/task.module";


@NgModule({
  declarations: [ColumnComponent],
  exports: [
    ColumnComponent
  ],
  imports: [
    CommonModule,
    TaskModule,
  ]
})

export class ColumnModule { }
