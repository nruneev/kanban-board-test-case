import {Action, createAction, props} from "@ngrx/store";
import {Task} from "../../core/interface/task";

export enum ETaskAction {
  GetTasks = '[Task] Get Tasks',
  SelectTask = '[Task] Set task',
  AddTask = '[Task] Add task',
  UpdateTask = '[Task] Update task',
}

export const GetTasks = createAction(
  ETaskAction.GetTasks,
  props<{tasks: Task[]}>()
)

export const AddTask = createAction(
  ETaskAction.AddTask,
  props<{task: Task}>()
)

export const UpdateTask = createAction(
  ETaskAction.UpdateTask,
  props<{task: Task}>()
)

export const SelectTask = createAction(
  ETaskAction.SelectTask,
  props<{task: Task}>()
)
