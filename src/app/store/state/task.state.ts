import {Task} from "../../core/interface/task";

export interface TaskState {
  tasks: Task[];
  selectedTask: Task;
}

export const initialState: TaskState = {
  tasks: [],
  selectedTask: null,
}
