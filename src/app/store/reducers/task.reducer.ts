import {initialState, TaskState} from "../state/task.state";
import {ActionReducerMap, createReducer, on} from "@ngrx/store";

import {AddTask, GetTasks, SelectTask, UpdateTask} from "../actions/task.action";

export const taskReducer = createReducer(
  initialState,
  on(GetTasks, (state, {tasks}) => ({
    ...state,
    tasks
  })),
  on(AddTask, (state, {task}) => ({
      ...state,
      tasks: [...state.tasks, task]
  })),
  on(UpdateTask, (state, {task}) => ({
    ...state,
    tasks: state.tasks.map(taskST => {
      if (taskST.id === task.id) {
        return task
      }
      return taskST;
    })
  })),
  on(SelectTask, (state, {task}) => ({
    ...state,
    selectedTask: task
  }))
)

export interface State {
  tasks: TaskState
}

export const reducers: ActionReducerMap<State> = {
  tasks: taskReducer,
};

