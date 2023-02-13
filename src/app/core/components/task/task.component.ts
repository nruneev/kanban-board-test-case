import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';

import {Task} from "../../interface/task";
import {Icon} from "../../../shared/enum/icon";
import {TaskService} from "../../service/task.service";
import {TaskOperation} from "../../enum/task-operation";
import {MatDialog} from "@angular/material/dialog";
import {EditTaskComponent} from "../../modal/edit-task/edit-task.component";
import {ViewTaskComponent} from "../../modal/view-task/view-task.component";


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TaskComponent {
  @Input() task: Task;

  @HostBinding('class.timeLose') get isTime() {
    return this.task.isTimeLose;
  }

  icons = Icon;

  constructor(
    private _taskService: TaskService,
    private _dialog: MatDialog
  ) {}

  changeTimeLose(event: boolean): void {
    this.task = {
      ...this.task,
      isTimeLose: event
    };
    this._taskService.getRequestToDB({
      operation: TaskOperation.update,
      updateData: this.task
    })
  }

  openEdit(): void {
    const dialog = this._dialog.open(EditTaskComponent, {
      data: this.task
    });

    dialog.afterClosed()
      .subscribe((task) => {
        this._taskService.getRequestToDB({operation: TaskOperation.update, updateData: task})
      });
  }

  viewTask(): void {
    const dialog = this._dialog.open(ViewTaskComponent, {
      data: this.task
    });
  }

  removeTask(): void {
    this._taskService.getRequestToDB({operation: TaskOperation.remove, id: this.task.id})
  }
}
