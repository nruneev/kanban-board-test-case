import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TaskComponent} from "./task.component";
import {MatCardModule} from "@angular/material/card";
import {ButtonsModule} from "../../../shared/components/buttons/buttons.module";
import {TimeBarModule} from "../../../shared/components/time-bar/time-bar.module";



@NgModule({
  declarations: [TaskComponent],
  exports: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ButtonsModule,
    TimeBarModule
  ]
})
export class TaskModule { }
