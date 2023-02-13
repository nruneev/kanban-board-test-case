import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ColumnModule} from "./components/column/column.module";
import {TaskModule} from "./components/task/task.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ColumnModule,
    TaskModule,
  ]
})

export class CoreModule { }
