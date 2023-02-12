import {Action} from "@ngrx/store";
import {Task} from "../../core/interface/task";

export enum ETaskAction {
  GetTasks = '[Task] Get Tasks',
  SelectTask = '[Task] Set task',
  AddTask = '[Task] Add task',
  UpdateTask = '[Task] Update task',
}

export class GetTasks implements Action {
  public readonly type = ETaskAction.GetTasks;
  constructor(public payload: Task[]) {}
}

export class AddTask implements Action {
  public readonly type = ETaskAction.AddTask;
  constructor(public payload: Task) {}
}

export class UpdateTask implements Action {
  public readonly type = ETaskAction.UpdateTask;
  constructor(public payload: Task) {}
}

export class SelectTask implements Action {
  public readonly type = ETaskAction.SelectTask;
  constructor(public payload: Task) {}
}

export type TaskActions = SelectTask | AddTask | GetTasks | UpdateTask;
