import {Component, OnInit} from '@angular/core';
import {Column} from "./core/interface/column";
import {StatusTask} from "./core/enum/status-task";
import {Icon} from "./shared/enum/icon";
import {MatDialog} from "@angular/material/dialog";
import {CreateTaskComponent} from "./core/modal/create-task/create-task.component";
import {TaskService} from "./core/service/task.service";
import {TaskOperation} from "./core/enum/task-operation";
import {TaskState} from "./store/state/task.state";
import {Store} from "@ngrx/store";
import {getTasksDone, getTasksNew, getTasksProcess} from "./store/selectors/task.selector";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements  OnInit {
  icons = Icon;
  columns: Column[] = [];

  constructor(
    private _dialog: MatDialog,
    private store: Store<TaskState>,
    private _tasksService: TaskService
  ) {
    this._tasksService.getRequestToDB({operation: TaskOperation.getAll});
  }

  ngOnInit(): void {
    this.columns = [{
      title: 'Новые',
      value: StatusTask.new,
      tasks: this.store.select(getTasksNew)
    }, {
      title: 'Выполняются',
      value: StatusTask.process,
      tasks: this.store.select(getTasksProcess)
    }, {
      title: 'Готовы',
      value: StatusTask.done,
      tasks: this.store.select(getTasksDone)
    }];
  }

  createTask(): void {
    const dialog = this._dialog.open(CreateTaskComponent);

    dialog.afterClosed().subscribe((task) => {
      this._tasksService.getRequestToDB({
        operation: TaskOperation.insert,
        insertData: task
      });
    })
  }
}
