import {TaskOperation} from "../enum/task-operation";
import {Task, TemplateTask} from "./task";

export interface WebWorkerData {
  operation: TaskOperation;
  insertData?: TemplateTask;
  updateData?: Task;
  id?: number
}
