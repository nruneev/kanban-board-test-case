import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TaskComponent} from "./task.component";
import {MatCardModule} from "@angular/material/card";
import {ButtonsModule} from "../../../shared/components/buttons/buttons.module";
import {TimeBarModule} from "../../../shared/components/time-bar/time-bar.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {EditTaskComponent} from "../../modal/edit-task/edit-task.component";
import {MatInputModule} from "@angular/material/input";
import {ViewTaskComponent} from "../../modal/view-task/view-task.component";



@NgModule({
  declarations: [TaskComponent, EditTaskComponent, ViewTaskComponent],
  exports: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ButtonsModule,
    TimeBarModule,
    ButtonsModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
  ]
})
export class TaskModule { }
