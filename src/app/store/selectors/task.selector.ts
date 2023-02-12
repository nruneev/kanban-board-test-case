import {createSelector} from "@ngrx/store";
import {TaskState} from "../state/task.state";

const taskState = (state: TaskState) => state;
export const getTasks = createSelector(taskState, (state: TaskState) => state.tasks);
export const getSelectedTask = createSelector(taskState, (state: TaskState) => state.selectedTask);
