import {initialState, TaskState} from "../state/task.state";
import {ETaskAction, TaskActions} from "../actions/task.action";

export const taskReducer = (state = initialState, action: TaskActions): TaskState => {
  switch (action.type) {
    case ETaskAction.GetTasks: {
      return {
        ...state,
        tasks: action.payload
      };
    }
    case ETaskAction.AddTask: {
      const tasks = [...state.tasks, action.payload]

      return {
        ...state,
        tasks
      };
    }
    case ETaskAction.UpdateTask: {
      const tasks = state.tasks.map(task => {
        if (task.id === action.payload.id) {
          return action.payload
        }
        return task;
      });

      return {
        ...state,
        tasks
      };
    }
    case ETaskAction.SelectTask: {
      return {
        ...state,
        selectedTask: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
