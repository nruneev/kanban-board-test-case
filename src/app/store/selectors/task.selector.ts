import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TaskState} from "../state/task.state";
import {StatusTask} from "../../core/enum/status-task";
import {State} from "../reducers/task.reducer";

const taskState = createFeatureSelector<TaskState>('tasks');

export const getTasksNew = createSelector(taskState, (state: TaskState) => state.tasks?.filter(task => task.status === StatusTask.new) || []);

export const getTasksProcess = createSelector(taskState, (state: TaskState) => state.tasks?.filter(task => task.status === StatusTask.process) || []);

export const getTasksDone = createSelector(taskState, (state: TaskState) => state.tasks?.filter(task => task.status === StatusTask.done) || []);

export const getSelectedTask = createSelector(taskState, (state: TaskState) => state.selectedTask);
