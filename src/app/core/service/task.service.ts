import {Injectable, OnDestroy} from '@angular/core';
import {Store} from "@ngrx/store";
import {NgxIndexedDBService} from "ngx-indexed-db";
import {Subscription} from "rxjs";

import {TaskState} from "../../store/state/task.state";
import {TaskOperation} from "../enum/task-operation";
import {TaskWebWorkerService} from "./task-web-worker.service";
import {AddTask, SelectTask, GetTasks, UpdateTask} from "../../store/actions/task.action";
import {Task, TemplateTask} from "../interface/task";
import {WebWorkerData} from "../interface/web-worker-data";


const STORE_NAME = 'task';

@Injectable({
  providedIn: 'root'
})

export class TaskService implements OnDestroy {
  private _worker: Worker
  private _subscription: Subscription = new Subscription();

  constructor(
    private _store: Store<TaskState>,
    private _dbService: NgxIndexedDBService,
    private _workerService: TaskWebWorkerService,
  ) {
    this._worker = this._workerService.buildWorker();

    this._worker.addEventListener('message', (event) => {
      const inputData: WebWorkerData = event.data;
      switch (inputData.operation) {
        case TaskOperation.getAll:
          this.getAll();
          break;
        case TaskOperation.getById:
          if (inputData.id) {
            this.getById(inputData.id);
          }
          break;
        case TaskOperation.insert:
          if (inputData.insertData) {
            this.insert(inputData.insertData);
          }
          break
        case TaskOperation.update:
          if (inputData.updateData) {
            this.update(inputData.updateData);
          }
          break
        case TaskOperation.remove:
          if(inputData.id) {
            this.delete(inputData.id);
          }
          break
      }
    })
  }

  getRequestToDB(config: WebWorkerData): void {
      this._worker.postMessage(config);
  }

  private getAll(): void {
    this._subscription.add(
    this._dbService.getAll(STORE_NAME).
      subscribe((tasks) => {
        this._store.dispatch(new GetTasks(tasks as Task[]))
      })
    );
  }

  private getById(id: number): void {
    this._subscription.add(
      this._dbService.getByID(STORE_NAME, id).subscribe((task) => {
        if (typeof task !== 'undefined') {
          this._store.dispatch(new SelectTask(task as Task));
        }
      })
    )
  }

  private insert(templateTask: TemplateTask): void {
    this._subscription.add(
      this._dbService.add(STORE_NAME, templateTask).subscribe((task: Task) => {
        this._store.dispatch(new AddTask(task));
      })
    )
  }

  private update(updateTask: Task): void {
    this._subscription.add(
      this._dbService.update(STORE_NAME, updateTask).subscribe((task: Task) => {
        this._store.dispatch(new UpdateTask(task));
      })
    )
  }

  private delete(id: number): void {
    this._subscription.add(
      this._dbService.delete(STORE_NAME, id).subscribe((tasks) => {
        this._store.dispatch(new GetTasks(tasks as Task[]));
      })
    )
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

}
