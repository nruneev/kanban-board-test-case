import {StatusTask} from "../enum/status-task";

export interface TemplateTask {
  title: string,
  description: string,
  time: number,
  status: StatusTask,
  dataUpdate: Date
}

export interface Task extends TemplateTask{
  id: number
}
